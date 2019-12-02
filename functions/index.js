const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.createUserArchive = functions.firestore.document('users/{id}').onCreate(async (snap, context) => {
  const newUser = snap.data();
  db.collection('users-archive').doc(context.params.id).set(newUser);
});

exports.updateUserArchive = functions.pubsub.schedule('every day 03:00').timeZone('Asia/Hong_Kong').onRun(async context => {
  const limit = 100;
  db.collection('users').get().then(snapshot => {
    snapshot.forEach(async doc => {
      const user = doc.data();
      const userInArchiveRef = await db.collection('users-archive').doc(doc.id);
      let snapshotInArchive = await userInArchiveRef.get();
      if (!snapshotInArchive.exists) {
        console.log('create missing user in archive');
        await db.collection('users-archive').doc(doc.id).set(user);
        snapshotInArchive = await db.collection('users-archive').doc(doc.id).get();
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

      db.collection('users').doc(doc.id).update(user);
      db.collection('users-archive').doc(doc.id).update(userInArchive);
    });
  });
});
