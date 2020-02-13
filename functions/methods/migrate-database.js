const FieldValue = require("firebase-admin").firestore.FieldValue;

const migrateDatabase = async (admin, db, id, { removeOldData, forceMigrate }) => {
  await db
    .collection("users")
    .doc(id)
    .get()
    .then(async doc => {
      const user = doc.data();
      if (!(forceMigrate || !user.productMigrated)) throw new Error("should not migrate");
      console.log(`migrating user with id: ${doc.id}`);
      const subcollections = [
        {
          id: "products",
          documents: user.products,
          collectionPath: `/users/${doc.id}/products`,
        },
      ];

      const batch = db.batch();
      const bigArray = [[]];
      let numberOfElements = 0;
      const documentLimit = 250;
      const productCollection = subcollections[0];
      productCollection.documents.forEach(currentData => {
        const index = bigArray.length - 1;
        currentData.updatedAt = new Date();
        bigArray[index].push(currentData);
        numberOfElements++;
        if (numberOfElements >= documentLimit) {
          bigArray[index + 1] = [];
          numberOfElements = 0;
        }
      });
      bigArray.forEach((array, index) => {
        const documentReference = db.collection(productCollection.collectionPath).doc();
        batch.set(documentReference, { index, [productCollection.id]: array });
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
      // create new documents
      await batch.commit();

      const objectToBeDeleted = { productMigrated: true };
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
