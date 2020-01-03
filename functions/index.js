const serviceAccount = require("./serviceAccountKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://open-fintech.firebaseio.com",
});
const db = admin.firestore();

exports.createUserArchive = functions.firestore.document("users/{id}").onCreate(async (snap, context) => {
  const newUser = snap.data();
  console.log(`create new user of id: ${context.params.id} in archive`);
  db.collection("users-archive")
    .doc(context.params.id)
    .set(newUser);
});

exports.syncTransactions = functions.pubsub
  .schedule("every day 03:00")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    const limit = 100;
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
          const userInArchive = snapshotInArchive.data();
          const archiveLength = userInArchive.transactions.length;
          userInArchive.transactions.splice(Math.max(archiveLength - limit, 0), Math.min(limit, archiveLength));
          userInArchive.transactions = userInArchive.transactions.concat(user.transactions);

          const userLength = user.transactions.length;
          if (userLength > limit) {
            user.transactions.splice(0, userLength - limit);
          } else if (userLength < limit) {
            user.transactions = userInArchive.transactions.slice(Math.max(userLength - limit, 0));
          }

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
  });
