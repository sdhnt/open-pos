const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.createUserArchive = functions.firestore.document('users/{id}').onCreate(async (snap, context) => {
  const newUser = snap.data();
  db.collection('users-archive').doc(context.params.id).set(newUser);
});

exports.updateUserArchive = functions.pubsub.schedule('every day 03:00').timeZone('Asia/Hong_Kong').onRun(async context => {
  const userRef = await db.collection('users');
  userRef.get().then(snapshot => {
    snapshot.forEach(async doc => {
      const user = doc.data();
      const userInArchiveRef = await db.collection('users-archive').doc(doc.id);
      const userInArchive = await userInArchiveRef.get();
      const archiveLength = userInArchive.transactions.length;
      userInArchive.transactions.splice(Math.max(archiveLength - 100, 0), Math.min(100, archiveLength));
      userInArchive.transactions.concat(user.transactions);

      const userLength = user.transactions.length;
      if (userLength > 100) {
        user.transactions.splice(0, userLength - 100);
      } else if (userLength < 100) {
        user.transactions = userInArchive.transactions.slice(Math.max(userLength - 100, 0));
      }
      userRef.update(user);
      userInArchiveRef.update(userInArchive);
    });
  });
});
