require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');
const firebase = require('firebase/app');

// const config = {
//   apiKey: 'AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A',
//   authDomain: 'open-fintech.firebaseapp.com',
//   databaseURL: 'https://open-fintech.firebaseio.com',
//   projectId: 'open-fintech',
//   storageBucket: 'open-fintech.appspot.com',
//   messagingSenderId: '1001643033524',
//   measurementId: 'G-CECMRG504L'
// };


// development firebase project instance
const config = {
  apiKey: 'AIzaSyBCuxB2TVyggRd-BCb4uiNSwLpTyKFW45Y',
  authDomain: 'open-fintech-dev.firebaseapp.com',
  databaseURL: 'https://open-fintech-dev.firebaseio.com',
  projectId: 'open-fintech-dev',
  storageBucket: 'open-fintech-dev.appspot.com',
  messagingSenderId: '651458361366',
};

let firebaseInitialized;
firebase.initializeApp(config);
firebaseInitialized = true;

let db;
let storage;

if (firebaseInitialized) {
  // Initialize Cloud Firestore through Firebase
  db = firebase.firestore();
  // Initialize Storage through Firebase
  storage = firebase.storage();
}

module.exports = {
  Firebase: firebaseInitialized ? firebase : null,
  FirebaseDB: firebaseInitialized ? db : null,
  FirebaseStorage: firebaseInitialized ? storage : null,
};
