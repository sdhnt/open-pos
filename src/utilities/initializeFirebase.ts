import * as firebase from 'firebase/app';
import { hasInternet } from './hasInternet';

export const config = {
  apiKey: 'AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A',
  authDomain: 'open-fintech.firebaseapp.com',
  databaseURL: 'https://open-fintech.firebaseio.com',
  projectId: 'open-fintech',
  storageBucket: 'open-fintech.appspot.com',
  messagingSenderId: '1001643033524',
  measurementId: 'G-CECMRG504L',
};

// const config = {
//   apiKey: 'AIzaSyDqpjwl-fUWNkRsgWNVc_m_6lJFFOp4opo',
//   authDomain: 'fir-open-pos.firebaseapp.com',
//   databaseURL: 'https://fir-open-pos.firebaseio.com',
//   projectId: 'fir-open-pos',
//   storageBucket: 'fir-open-pos.appspot.com',
//   messagingSenderId: '1053421780677',
//   appId: '1:1053421780677:web:85f4e9e25ebe5cbcd1faac',
//   measurementId: 'G-0DL444CEST',
// };

export const initializeFirebase = async (): Promise<boolean> => {
  // check if there is internet and if there is an app running already
  console.log('initialize firebase app first line', await hasInternet());
  const condition = (await hasInternet()) && firebase.apps.length === 0;
  console.log('initialize firebase app second line', condition);
  if (condition) {
    console.log('initialize firebase app');
    firebase.initializeApp(config);
  }
  console.log('initialize firebase app second line', (await hasInternet()) && firebase.apps.length !== 0);
  return (await hasInternet()) && firebase.apps.length !== 0;
};
