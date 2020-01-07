const moment = require("moment");
const momentTimezone = require("moment-timezone");

const convertToHongKongDateTime = dateTime => momentTimezone(dateTime).tz("Asia/Hong_Kong");

const currentHongKongDate = () => moment(convertToHongKongDateTime(new Date())).startOf("date");

const calculateDailyPerformance = transactions => {
  // algorithm assumes to be called to calculate the previous day's transactions
  const transactionsToday = transactions.filter(
    transaction =>
      moment(convertToHongKongDateTime(transaction.datetime)).isSameOrAfter(currentHongKongDate().subtract(1, "day")) &&
      moment(convertToHongKongDateTime(transaction.datetime)).isBefore(currentHongKongDate()),
  );

  let revenue = 0,
    profit = 0,
    expenses = 0;

  transactionsToday.forEach(transaction => {
    const transactionAmount = transaction.totalatax;
    if (transactionAmount > 0) {
      revenue += transactionAmount;
      let transactionCost = 0;
      if (transaction.itemslist)
        transaction.itemslist.forEach(item => {
          const cost = Number(item.cost);
          const qty = Number(item.qty);
          if (!isNaN(cost) && !isNaN(qty)) transactionCost += cost * qty;
        });
      profit += transactionAmount - transactionCost;
    } else expenses += transactionAmount;
  });

  return {
    revenue,
    profit,
    expenses,
  };
};

module.exports = { calculateDailyPerformance };
