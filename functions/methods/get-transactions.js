const moment = require("moment");
const TimeStamp = require("firebase-admin").firestore.Timestamp;

const getTransactions = async (db, id, start, end) => {
  const transactions = [];
  const userDoc = await db
    .collection("users")
    .doc(id)
    .get();
  const user = userDoc.data();
  if (!user.transactionMigrated) {
    const archiveDoc = await db
      .collection("users-archive")
      .doc(id)
      .get();
    const userInArchive = archiveDoc.data();
    userInArchive.transactions.forEach(transaction => {
      const index = transactions.findIndex(document => moment(document.datetime).isSame(moment(transaction.datetime)));
      if (index !== -1) transactions[index] = transaction;
      else transactions.push(transaction);
    });
    user.transactions.forEach(transaction => {
      const index = transactions.findIndex(document => moment(document.datetime).isSame(moment(transaction.datetime)));
      if (index !== -1) transactions[index] = transaction;
      else transactions.push(transaction);
    });
  } else {
    const startValue = TimeStamp.fromDate(new Date(start));
    const endValue = TimeStamp.fromDate(new Date(end));
    await db
      .collection(`/users/${id}/transactions`)
      .where("timestamp", "<=", startValue)
      .orderBy("timestamp", "desc")
      .limit(1)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          transactions.push(...data.transactions);
        });
      });
    await db
      .collection(`/users/${id}/transactions`)
      .where("timestamp", ">", startValue)
      .where("timestamp", "<=", endValue)
      .orderBy("timestamp")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          transactions.push(...data.transactions);
        });
      });
  }

  transactions.sort((a, b) => (moment(a.datetime).isSameOrBefore(moment(b.datetime)) ? -1 : 1));
  return transactions.filter(transaction => {
    const dateTime = moment(transaction.datetime);
    return dateTime.isSameOrAfter(moment(start)) && dateTime.isSameOrBefore(moment(end));
  });
};

module.exports = { getTransactions };
