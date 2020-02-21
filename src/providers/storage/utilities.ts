import firebase from "firebase";

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
