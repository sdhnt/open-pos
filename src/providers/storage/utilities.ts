import firebase from "firebase";
const Timestamp = firebase.firestore.Timestamp;

export const queryUser = async (): Promise<{ id?: string; user?: any }> => {
  const db = firebase.firestore();
  const userSnapshot = await db
    .collection("users")
    .where("owner", "==", firebase.auth().currentUser.uid)
    .get();
  const dataSet = [];
  userSnapshot.forEach(doc => {
    dataSet.push({ id: doc.id, user: doc.data() });
  });
  return dataSet[0];
};

export const queryCollection = async (path: string): Promise<any[]> => {
  const db = firebase.firestore();
  const snapshot = await db.collection(path).get();
  const dataSet = [];
  snapshot.forEach(doc => {
    const document = doc.data();
    for (const [key, value] of Object.entries(document)) {
      if (typeof value === "object" && value.seconds && value.nanoseconds)
        document[key] = new Timestamp(value.seconds, value.nanoseconds).toDate();
    }
    dataSet.push({ id: doc.id, ...document });
  });
  return dataSet;
};

export const createFirestoreCollection = async (collectionPath, documents) => {
  const db = firebase.firestore();
  const batch = db.batch();
  documents.forEach(document => {
    const documentReference = db.collection(collectionPath).doc();
    batch.set(documentReference, document);
  });
  await batch.commit();
};

export const deleteFirestoreCollection = (collectionPath, batchSize) => {
  const db = firebase.firestore();
  const deleteQueryBatch = (db, query, batchSize, resolve, reject) => {
    query
      .get()
      .then(snapshot => {
        // When there are no documents left, we are done
        if (snapshot.size == 0) {
          return 0;
        }

        // Delete documents in a batch
        const batch = db.batch();
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });

        return batch.commit().then(() => {
          return snapshot.size;
        });
      })
      .then(numDeleted => {
        if (numDeleted === 0) {
          resolve();
          return;
        }

        // Recurse on the next process tick, to avoid
        // exploding the stack.
        process.nextTick(() => {
          deleteQueryBatch(db, query, batchSize, resolve, reject);
        });
      })
      .catch(reject);
  };

  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, batchSize, resolve, reject);
  });
};
