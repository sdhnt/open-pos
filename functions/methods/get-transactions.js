const moment = require("moment");

const getTransactions = async (db, id, start, end) => {
  const doc = await db
    .collection("users")
    .doc(id)
    .get();
  const user = doc.data();
  const transactions = user.transactions;

  const filteredTransactions = transactions.filter(transaction => {
    const dateTime = moment(transaction.datetime);
    return dateTime.isSameOrAfter(moment(start)) && dateTime.isSameOrBefore(moment(end));
  });

  return filteredTransactions.sort((a, b) => {
    const aDateTime = moment(a.datetime);
    const bDateTime = moment(b.datetime);
    if (aDateTime.isBefore(bDateTime)) return -1;
    if (aDateTime.isAfter(bDateTime)) return 1;
    else return 0;
  });
};

module.exports = { getTransactions };
