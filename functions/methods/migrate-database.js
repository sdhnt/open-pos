const moment = require("moment");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const TimeStamp = require("firebase-admin").firestore.Timestamp;

const migrateDatabase = async (admin, db, id, { removeOldData, forceMigrate }) => {
  await db
    .collection("users")
    .doc(id)
    .get()
    .then(async doc => {
      const user = doc.data();
      if (!(forceMigrate || !user.productMigrated || !user.transactionMigrated)) throw new Error("should not migrate");
      console.log(`migrating user with id: ${doc.id}`);

      const subcollections = [
        {
          id: "products",
          documents: user.products,
          collectionPath: `/users/${doc.id}/products`,
          documentLimit: 250,
        },
        {
          id: "transactions",
          documents: [],
          collectionPath: `/users/${doc.id}/transactions`,
          documentLimit: 200,
        },
      ];

      // migrate products
      const productCollection = subcollections[0];
      const productBatch = db.batch();
      const productBigArray = [[]];
      let numberOfElements = 0;
      productCollection.documents.forEach(currentData => {
        const index = productBigArray.length - 1;
        currentData.updatedAt = new Date();
        productBigArray[index].push(currentData);
        numberOfElements++;
        if (numberOfElements >= productCollection.documentLimit) {
          productBigArray[index + 1] = [];
          numberOfElements = 0;
        }
      });
      productBigArray.forEach((array, index) => {
        const documentReference = db.collection(productCollection.collectionPath).doc();
        productBatch.set(documentReference, { index, [productCollection.id]: array });
      });

      // migrate transactions
      const transactionCollection = subcollections[1];
      const transactionBatch = db.batch();
      const snapshot = await db
        .collection("users-archive")
        .doc(doc.id)
        .get();
      const userInArchive = snapshot.data();
      transactionCollection.documents = userInArchive.transactions;
      user.transactions.forEach(transaction => {
        const index = transactionCollection.documents.findIndex(document =>
          moment(document.datetime).isSame(moment(transaction.datetime)),
        );
        if (index !== -1) transactionCollection.documents[index] = transaction;
        transactionCollection.documents.push(transaction);
      });
      transactionCollection.documents.sort((a, b) => (moment(a.datetime).isSameOrBefore(moment(b.datetime)) ? -1 : 1));
      const transactionBigArray = [[]];
      numberOfElements = 0;
      transactionCollection.documents.forEach(currentData => {
        const index = transactionBigArray.length - 1;
        currentData.updatedAt = new Date();
        transactionBigArray[index].push(currentData);
        numberOfElements++;
        if (numberOfElements >= transactionCollection.documentLimit) {
          transactionBigArray[index + 1] = [];
          numberOfElements = 0;
        }
      });
      transactionBigArray.forEach(array => {
        const documentReference = db.collection(transactionCollection.collectionPath).doc();
        const timestamp = TimeStamp.fromDate(new Date(array[0].datetime));
        transactionBatch.set(documentReference, {
          timestamp,
          [transactionCollection.id]: array,
        });
      });

      // remove all existing documents in sub collection
      await db
        .collection(productCollection.collectionPath)
        .get()
        .then(async snapshot => {
          const deleteBatch = db.batch();
          snapshot.docs.forEach(doc => {
            deleteBatch.delete(doc.ref);
          });
          await deleteBatch.commit();
        });
      await db
        .collection(transactionCollection.collectionPath)
        .get()
        .then(async snapshot => {
          const deleteBatch = db.batch();
          snapshot.docs.forEach(doc => {
            deleteBatch.delete(doc.ref);
          });
          await deleteBatch.commit();
        });

      // create new documents
      await productBatch.commit();
      await transactionBatch.commit();

      // remove original arrays
      const objectToBeDeleted = { productMigrated: true, transactionMigrated: true };
      if (removeOldData) {
        subcollections.forEach(collection => (objectToBeDeleted[collection.id] = FieldValue.delete()));
      }
      await db
        .collection("users")
        .doc(doc.id)
        .update(objectToBeDeleted);
    });
};

module.exports = { migrateDatabase };
