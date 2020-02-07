const serviceAccount = require("./serviceAccountKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://open-fintech.firebaseio.com",
});
const db = admin.firestore();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));
const { syncArchive } = require("./methods/sync-archive");
const { getTransactions } = require("./methods/get-transactions");

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

// https functions
app.get("/versionNumber", (req, res) => {
  const versionNumber = "0.0.8";
  res.status(200).json({ versionNumber });
});

app.get("/transactions", async (req, res) => {
  const { id, start, end } = req.query;
  try {
    const transactions = await getTransactions(db, id, start, end);
    res.status(200).json({ transactions });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

exports.data = functions.https.onRequest(app);

// to be removed - start
app.get("/", (req, res) => {
  const versionNumber = "0.0.8";
  res.status(200).json({ versionNumber });
});
exports.getVersionNumber = functions.https.onRequest(app);
// to be removed - end
