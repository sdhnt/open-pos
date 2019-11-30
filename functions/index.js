const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.createUserArchive = functions.firestore.document('users/{id}').onCreate(async (snap, context) => {
  const newUser = snap.data();
  db.collection('users-archive').doc(context.params.id).set(newUser);
});

exports.updateUserArchive = functions.firestore.document('users/{id}').onUpdate(async (change, context) => {
  const newUser = change.after.data();
  console.log(newUser);
  const userRef = await db.collection('users').doc(context.params.id);
  const userInArchiveRef = await db.collection('users-archive').doc(context.params.id);

  // limit number of transactions in user collection, store extra transactions in user-archive collection
  userInArchiveRef.get().then(doc => {
    const userInArchive = doc.data();
    console.log(userInArchive);
    const archiveLength = userInArchive.transactions.length;
    userInArchive.transactions.splice(Math.max(archiveLength - 100, 0), Math.min(100, archiveLength));
    userInArchive.transactions.concat(newUser.transactions);
    console.log(userInArchive);

    const userLength = newUser.transactions.length;
    if (userLength > 100) {
      newUser.transactions.splice(0, userLength - 100);
    } else if (userLength < 100) {
      newUser.transactions = userInArchive.transactions.slice(Math.max(userLength - 100, 0));
    }

    userRef.update(newUser);
    userInArchiveRef.update(userInArchive);
  });
});
