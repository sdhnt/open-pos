import firebase from "firebase";
import axios from "axios";
import moment from "moment";
import { cloneDeep } from "lodash";
import Timestamp = firebase.firestore.Timestamp;
import Transaction = firebase.firestore.Transaction;

interface Document {
  id: string;
  updatedAt: Date;
}

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

export const convertDateToTimestamp = (document): any => {
  if (typeof document === "object")
    for (const [key, value] of Object.entries(document)) {
      // @ts-ignore
      if ((value instanceof Date || value instanceof String) && moment(new Date(value), moment.ISO_8601).isValid())
        // @ts-ignore
        document[key] = Timestamp.fromDate(moment(value).toDate());
    }
};

export const updateCollectionWithTransaction = async (
  t: Transaction,
  path: string,
  documents: Document[],
): Promise<void> => {
  const db = firebase.firestore();
  for (const document of documents) {
    const cloudDoc = cloneDeep(document);
    convertDateToTimestamp(cloudDoc);
    console.log(cloudDoc);

    let id = cloudDoc.id;
    let reference;
    if (id) reference = db.collection(path).doc(id);
    else {
      reference = db.collection(path).doc();
      id = reference.id;
    }

    await t.set(reference, { ...cloudDoc, id }, { merge: true });
  }
};

const hasInternet = async (url?: string): Promise<boolean> => {
  try {
    if (!url) url = "https://us-central1-open-fintech.cloudfunctions.net/data/versionNumber";
    await axios.get(url);
    return true;
  } catch (error) {}
};
