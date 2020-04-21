import * as firebase from 'firebase';
// import uniqid from 'uniqid';
import { v4 as uuidv4 } from 'uuid';
const TimeStamp = firebase.firestore.Timestamp;

const defaultUser = {
  created: firebase.firestore.FieldValue.serverTimestamp(),
  owner: '',
  owner_name: '',
  autosave: 0,
  business_name: '',
  businesstype: '',
  business_address: '',
  email: 'sample@sample.com',
  ph_no: '',
  language: 'en',
  currency: 'USD',
  cash_balance: 0,
  isSubUser: false,
  mainUser: '',
  discount: 0,
  taxrate: 0,
  // tslint:disable-next-line: max-line-length
  logo_url: 'https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-9/79674109_100715951430298_615106696234139648_n.png?_nc_cat=109&_nc_ohc=2pdu1s1LRmoAX-04NCO&_nc_ht=scontent.fhkg10-1.fna&oh=70fea5a886837de2b9cf4aaf4a4112a8&oe=5EF6F085',
  categories: [{ id: uuidv4(), name: 'Example', updatedAt: new Date() }],
};

const subCollections = [
  {
    id: 'products',
    documents: [
      {
        cat: 'Example',
        code: '0000',
        cost: '100',
        name: 'Example Product',
        price: '0',
        stock_qty: '10',
        url: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
        wholesale_price: '0',
        updatedAt: TimeStamp.now(),
      },
    ],
  },
  {
    id: 'transactions',
    documents: [
      {
        datetime: new Date(),
        discount: 0,
        discountlist: [],
        itemslist: [
          {
            cat: 'Example',
            code: '0000',
            cost: '0',
            name: 'Example Product',
            price: '0',
            stock_qty: '0',
            qty: 1,
            discount: 0,
          },
        ],
        pnllist: [],
        prodidlist: [],
        taxrate: 0,
        totalatax: 0,
        totaldisc: 0,
        totalsum: 0,
        updatedAt: TimeStamp.now(),
      },
    ],
  },
];

export const createAccountDocument = async user => {
  console.log("USER DATA ================",user)
  const db = firebase.firestore();

  const userDoc = await db.collection('users').add({
    ...defaultUser,
    ...user,
  });
  const userId = userDoc.id;
  const batch = db.batch();
  subCollections.forEach(collection => {
    collection.documents.forEach(document => {
      const documentReference = db.collection(`/users/${userId}/${collection.id}`).doc();
      const id = documentReference.id;
      batch.set(documentReference, { ...document, id });
    });
  });
  await batch.commit();
};
