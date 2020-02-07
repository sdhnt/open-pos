const { calculateDailyPerformance } = require("./calculate-business-performance");

const syncArchive = async (db, { syncTransactions, calculateBusinessPerformance, syncUserCount }) => {
  // limit on number of transactions saved in user documents
  const limit = 100; // important note: do not change this limit as it would completely mess up the syncing algorithm

  if (syncTransactions || calculateBusinessPerformance) {
    let batch = db.batch();
    let numberOfOperations = 0;
    await db
      .collection("users")
      .get()
      .then(snapshot => {
        const numberOfUsers = snapshot.size;
        console.log(`number of users: ${numberOfUsers}`);
        snapshot.forEach(async doc => {
          const user = doc.data();
          const userInArchiveRef = db.collection("users-archive").doc(doc.id);
          let snapshotInArchive = await userInArchiveRef.get();
          if (!snapshotInArchive.exists) {
            console.log(`create missing user of id: ${doc.id} in archive`);
            await db
              .collection("users-archive")
              .doc(doc.id)
              .set(user);
            snapshotInArchive = await db
              .collection("users-archive")
              .doc(doc.id)
              .get();
          }

          // sync userInArchive transactions with user transactions
          const userInArchive = snapshotInArchive.data();
          const archiveLength = userInArchive.transactions.length;
          userInArchive.transactions.splice(Math.max(archiveLength - limit, 0), Math.min(limit, archiveLength));
          userInArchive.transactions = userInArchive.transactions.concat(user.transactions);

          // calculate performance based on latest user transactions
          if (calculateBusinessPerformance) {
            const nullPerformance = { revenue: 0, profit: 0, expenses: 0 };
            if (!user.businessPerformance) user.businessPerformance = [];
            const currentLength = user.businessPerformance.length;
            for (let i = 0; i < 31 - currentLength; i++) {
              user.businessPerformance.unshift(nullPerformance);
            }
            user.businessPerformance.shift();
            user.businessPerformance[user.businessPerformance.length - 1] = calculateDailyPerformance(
              user.transactions,
            );
            user.businessPerformance.push(nullPerformance);
          }

          // remove extra user transactions if number is above the limit
          const userLength = user.transactions.length;
          if (userLength > limit) {
            user.transactions.splice(0, userLength - limit);
          } else if (userLength < limit) {
            const userInArchiveLength = userInArchive.transactions.length;
            user.transactions = userInArchive.transactions.slice(Math.max(userInArchiveLength - limit, 0));
          }

          if (userInArchive.transactions.length > limit) {
            console.log(`user with id: ${doc.id} have trimmed transactions`);
            console.log(
              `user transactions: ${user.transactions.length}, userInArchive transactions: ${userInArchive.transactions.length}`,
            );
          }

          // update user and userInArchive
          const userUpdateRef = db.collection("users").doc(doc.id);
          batch.update(userUpdateRef, user);
          user.transactions = userInArchive.transactions;
          const userInArchiveUpdateRef = db.collection("users-archive").doc(doc.id);
          batch.update(userInArchiveUpdateRef, user);
          numberOfOperations += 2;
          if (numberOfOperations > 480 || numberOfOperations === 2 * numberOfUsers) {
            console.log(`number of operations in this batch: ${numberOfOperations}`);
            await batch.commit();
            batch = db.batch();
            numberOfOperations = 0;
          }
        });
      });
  }

  // remove deleted users in archive
  if (syncUserCount)
    await db
      .collection("users-archive")
      .get()
      .then(snapshot => {
        snapshot.forEach(async doc => {
          const userRef = await db.collection("users").doc(doc.id);
          const snapshotInArchive = await userRef.get();
          if (!snapshotInArchive.exists) {
            console.log(`remove user of id: ${doc.id} in archive`);
            await db
              .collection("users-archive")
              .doc(doc.id)
              .delete();
          }
        });
      });
};

module.exports = { syncArchive };
