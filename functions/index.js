const serviceAccount = require("./serviceAccountKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://open-fintech.firebaseio.com",
});
const db = admin.firestore();
const { syncArchive } = require("./methods/sync-archive");

exports.createUserArchive = functions.firestore.document("users/{id}").onCreate(async (snap, context) => {
  const newUser = snap.data();
  console.log(`create new user of id: ${context.params.id} in archive`);
  db.collection("users-archive")
    .doc(context.params.id)
    .set(newUser);
});

exports.syncArchive = functions.pubsub
  .schedule("every day 03:00")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    await syncArchive(db, 100); // limit on number of transactions saved in user documents
  });
