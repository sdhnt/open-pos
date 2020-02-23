import firebase from "firebase";
import axios from "axios";
import Timestamp = firebase.firestore.Timestamp;

export const queryUser = async (): Promise<{ id?: string; user?: any }> => {
  if (!(await hasInternet())) throw new Error("No internet connection");
  const db = firebase.firestore();
  const userSnapshot = await db
    .collection("users")
    .where("owner", "==", firebase.auth().currentUser.uid)
    .get();
  const dataSet = [];
  userSnapshot.forEach(doc => {
    const user = doc.data();
    convertTimestampToDate(user);
    dataSet.push({ id: doc.id, user });
  });
  return dataSet[0];
};

export const queryCollection = async (path: string, options?: { lastBackup?: Date }): Promise<any[]> => {
  if (!(await hasInternet())) throw new Error("No internet connection");
  const db = firebase.firestore();
  const defaultOptions = { lastBackup: new Date("2000-01-01T00:00:00.000Z") };
  const { lastBackup } = options ? options : defaultOptions;

  let reference: firebase.firestore.Query = db.collection(path);
  if (lastBackup) reference = reference.where("updatedAt", ">=", Timestamp.fromDate(new Date(lastBackup)));
  const snapshot = await reference.get();

  const dataSet = [];
  snapshot.forEach(doc => {
    const document = doc.data();
    convertTimestampToDate(document);
    dataSet.push({ id: doc.id, ...document });
  });
  return dataSet;
};

export const convertTimestampToDate = (document): any => {
  if (typeof document === "object") {
    for (const [key, value] of Object.entries(document)) {
      // @ts-ignore
      if (value.seconds)
        // @ts-ignore
        document[key] = new Timestamp(value.seconds, value.nanoseconds).toDate();
    }
  }
  return document;
};

const hasInternet = async (url?: string): Promise<boolean> => {
  try {
    if (!url) url = "https://us-central1-open-fintech.cloudfunctions.net/data/versionNumber";
    await axios.get(url);
    return true;
  } catch (error) {}
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
