const FieldValue = require("firebase-admin").firestore.FieldValue;

const migrateDatabase = async (admin, db, { removeOldData }) => {
  await db
    .collection("users")
    .get()
    .then(snapshot => {
      snapshot.forEach(async doc => {
        if (doc.id !== "x6LEMXK2nsZbJlkYVgC1") return;
        const user = doc.data();
        console.log(`migrating user with id: ${doc.id}`);
        const subcollections = [
          {
            id: "products",
            documents: user.products,
          },
        ];

        if (removeOldData) {
          const objectToBeDeleted = {};
          subcollections.forEach(collection => (objectToBeDeleted[collection.id] = FieldValue.delete()));
          await db
            .collection("users")
            .doc(doc.id)
            .update(objectToBeDeleted);
        }
      });
    });
};

module.exports = { migrateDatabase };
