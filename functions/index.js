const serviceAccount = require("./serviceAccountKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://open-fintech.firebaseio.com",
});
const db = admin.firestore();
const { syncArchive } = require("./methods/sync-archive");

const largeRuntimeConfig = {
  timeoutSeconds: 540,
  memory: "1GB",
};

exports.createUserArchive = functions.firestore.document("users/{id}").onCreate(async (snap, context) => {
  const newUser = snap.data();
  console.log(`create new user of id: ${context.params.id} in archive`);
  db.collection("users-archive")
    .doc(context.params.id)
    .set(newUser);
});

exports.syncTransactionsAndCalculateBusinessPerforamnce = functions
  .runWith(largeRuntimeConfig)
  .pubsub.schedule("every day 03:00")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    await syncArchive(db, { syncTransactions: true, calculateBusinessPerformance: true });
  });

exports.syncUserCount = functions
  .runWith(largeRuntimeConfig)
  .pubsub.schedule("every day 03:30")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    await syncArchive(db, { syncUserCount: true });
  });

// exports.syncArchiveCallable = functions.runWith(largeRuntimeConfig).https.onRequest(async (req, res) => {
//   await syncArchive(db, { calculateBusinessPerformance: false });
//   res.status(200).send(`request received with limit: 100`);
// });
