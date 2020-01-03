const syncArchive = async (db, limit) => {
  await db
    .collection("users")
    .get()
    .then(snapshot => {
      snapshot.forEach(async doc => {
        const user = doc.data();
        const userInArchiveRef = await db.collection("users-archive").doc(doc.id);
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

        // remove extra user transactions if number is above the limit
        const userLength = user.transactions.length;
        if (userLength > limit) {
          user.transactions.splice(0, userLength - limit);
        } else if (userLength < limit) {
          user.transactions = userInArchive.transactions.slice(Math.max(userLength - limit, 0));
        }

        if (userInArchive.transactions.length > limit)
          console.log(
            `user transactions: ${user.transactions.length}, userInArchive transactions: ${userInArchive.transactions.length}`,
          );

        // update user and userInArchive
        await db
          .collection("users")
          .doc(doc.id)
          .update(user);
        user.transactions = userInArchive.transactions;
        await db
          .collection("users-archive")
          .doc(doc.id)
          .update(user);
      });
    });

  // remove deleted users in archive
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
