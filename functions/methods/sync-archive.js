const { calculateDailyPerformance } = require("./calculate-business-performance");

const syncArchive = async (db, { syncTransactions, calculateBusinessPerformance, syncUserCount }) => {
  // limit on number of transactions saved in user documents
  const limit = 100; // important note: do not change this limit as it would completely mess up the syncing algorithm

  if (syncTransactions) {
    const batchArray = [db.batch()];
    let batchIndex = 0;
    let numberOfOperations = 0;
    const batchSize = 10;
    await db
      .collection("users")
      .get()
      .then(snapshot => {
        const numberOfUsers = snapshot.size;
        console.log(`number of users: ${numberOfUsers}`);
        snapshot.forEach(async doc => {
          const user = doc.data();
          if (user.transactionMigrated) return;
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
          batchArray[batchIndex].update(userUpdateRef, user);
          user.transactions = userInArchive.transactions;
          const userInArchiveUpdateRef = db.collection("users-archive").doc(doc.id);
          batchArray[batchIndex].update(userInArchiveUpdateRef, user);
          numberOfOperations += 2;
          if (numberOfOperations >= batchSize) {
            console.log(`number of operations in this batch: ${numberOfOperations}`);
            batchArray.push(db.batch());
            batchIndex++;
            numberOfOperations = 0;
          }
        });
      });
    batchArray.forEach(batch => batch.commit().then(() => {}));
  }

  // remove deleted users in archive
  if (syncUserCount) {
    const batchArray = [db.batch()];
    let batchIndex = 0;
    let operations = 0;
    await db
      .collection("users-archive")
      .get()
      .then(snapshot => {
        snapshot.forEach(async doc => {
          const userSnapshot = await db
            .collection("users")
            .doc(doc.id)
            .get();
          if (!userSnapshot.exists) {
            console.log(`remove user of id: ${doc.id} in archive`);
            const ref = db.collection("users-archive").doc(doc.id);
            operations++;
            batchArray[batchIndex].delete(ref);
            if (operations === 499) {
              batchArray.push(db.batch());
              batchIndex++;
              operations = 0;
            }
          }
        });
      });
    batchArray.forEach(batch => batch.commit().then(() => {}));
  }
};

module.exports = { syncArchive };
