import { Injectable, ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import firebase from "firebase";
import { Nav, NavController, ToastController } from "ionic-angular";
import moment from "moment";
import uniqid from "uniqid";
import {
  convertTimestampToDate,
  queryCollection,
  queryUser,
  updateCollectionWithTransaction,
} from "./utilities/firestore";
import { syncDocuments, transactionCallback } from "./utilities/backupStorage";

@Injectable()
export class StorageProvider {
  @ViewChild(Nav) nav: Nav;

  //
  products: any = [];
  categories: any = [];
  transactions: any = [];
  user: any = {};
  contacts: any = [];
  summary: any = [];
  coach: any = {};

  static get parameters() {
    return [[Storage]];
  }

  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController) {}

  async clearMem() {
    await this.storage.clear();
  }

  async saveInMemory(): Promise<void> {
    await this.storage.ready();
    await this.storage.set("categories", JSON.stringify(this.categories));
    await this.storage.set("products", JSON.stringify(this.products));
    await this.storage.set("transactions", JSON.stringify(this.transactions));
    await this.storage.set("user", JSON.stringify(this.user));
    await this.storage.set("contacts", JSON.stringify(this.contacts));
    await this.storage.set("summary", JSON.stringify(this.summary));
    await this.storage.set("coach", JSON.stringify(this.coach));
  }

  async setMem(options?: { force?: boolean }): Promise<boolean> {
    const defaultOptions = { force: false };
    const { force } = options ? options : defaultOptions;
    await this.storage.ready();

    // check if user data is already in memory
    const userInMemory = JSON.parse(await this.getUserDat());
    const productsInMemory = JSON.parse(await this.getProducts());
    const transactionsInMemory = JSON.parse(await this.getTransactions());
    const userCondition = userInMemory && userInMemory.id;
    const productCondition = productsInMemory && productsInMemory.length > 0;
    const transactionCondition = transactionsInMemory && transactionsInMemory.length > 0;
    // if (!force && userCondition && productCondition && transactionCondition) return false;

    console.log("setMem(): query user data from firestore");
    // query user from firestore
    let id, user;
    try {
      const result = await queryUser();
      id = result.id;
      user = result.user;
    } catch (error) {
      console.log(error);
    }
    if (!id || !user) return false;

    // extract categories and business performance (as summary)
    this.categories = user.categories ? user.categories.map(category => convertTimestampToDate(category)) : [];
    if (!user.businessPerformance) {
      this.summary = [];
      for (let i = 0; i <= 30; i++) this.summary.push({ expenses: 0, revenue: 0, profit: 0 });
    } else this.summary = user.businessPerformance;

    // query sub collections
    try {
      for (const path of ["products", "transactions"]) {
        this[path] = await queryCollection(`/users/${id}/${path}`);
      }
    } catch (error) {
      console.log(error);
    }

    // prune user object to reduce data overhead
    for (const key of ["businessPerformance", "categories", "products", "transactions"]) delete user[key];
    this.user = { ...user, id };

    // save user data in memory
    await this.saveInMemory();

    // set last backup to current time
    await this.setLastBackup();

    return true;
  }

  // setcoach() {
  //   return new Promise((resolve, reject) => {
  //     this.storage.ready().then(async () => {
  //       const tempvid = [];
  //       await firebase
  //         .firestore()
  //         .collection("tutorial")
  //         .get()
  //         .then(doc => {
  //           //console.log(doc)
  //           doc.docs.forEach(element => {
  //             console.log(element);

  //             element.data().video.forEach(element2 => {
  //               element2.language = element.id;
  //               tempvid.push(element2);
  //             });
  //             //tempvid = element.data().video;
  //           });
  //         });
  //       this.coach = {
  //         video: tempvid,
  //       };
  //       resolve();
  //     });
  //   });
  // }

  // async getCoach() {
  //   return await this.storage.get("coach");
  // }

  async backupStorage(): Promise<void> {
    const user = JSON.parse(await this.getUserDat());
    let lastBackup = await this.getLastBackup();
    lastBackup = lastBackup ? lastBackup : new Date("2000-01-01T00:00:00.000Z");
    console.log(`backup: lastBackup is ${moment(lastBackup).format()}`);

    const [productDeviceDocs, transactionDeviceDocs, categoryDeviceDocs] = [
      JSON.parse(await this.getProducts()),
      JSON.parse(await this.getTransactions()),
      JSON.parse(await this.getCategories()),
    ];
    const db = firebase.firestore();

    // handle sub collection documents
    const subCollections = [
      {
        id: "products",
        deviceDocs: productDeviceDocs,
        cloudDocs: [],
      },
      {
        id: "transactions",
        deviceDocs: transactionDeviceDocs,
        cloudDocs: [],
        callback: transactionCallback,
        output: {
          changeInCash: 0,
          products: productDeviceDocs,
        },
      },
    ];

    try {
      for (const collection of subCollections) {
        // query sub collection documents with updated at later than last backup
        collection.cloudDocs = await queryCollection(`/users/${user.id}/${collection.id}`, { lastBackup });
      }
      // modify sub collection documents
      for (const collection of subCollections) {
        syncDocuments(collection);
      }

      let changeInCash = 0;
      for (const collection of subCollections) {
        if (collection.id === "transactions") changeInCash = collection.output.changeInCash;
      }
      const oldCashBalance = Number(user.cash_balance);
      user.cash_balance = changeInCash + (!isNaN(oldCashBalance) ? oldCashBalance : 0);
      console.log(`backup: change in cash balance: ${changeInCash}, new cash balance: ${user.cash_balance}`);
    } catch (error) {
      console.log(error);
      return;
    }

    try {
      // run with firestore transactions
      await db.runTransaction(async t => {
        console.log("backup: run transaction");

        // update user
        const { id, user: userInCloud } = await queryUser();
        if (!id || !userInCloud) throw new Error("backup error: no user document found");
        // if user is later than the one in cloud, update document
        const categories = {
          deviceDocs: categoryDeviceDocs,
          cloudDocs: userInCloud.categories
            ? userInCloud.categories.map(category => convertTimestampToDate(category))
            : [],
        };
        syncDocuments(categories);

        const newUser = moment(user.updatedAt).isSameOrAfter(moment(userInCloud.updatedAt)) ? user : userInCloud;
        newUser.cash_balance = user.cash_balance;
        newUser.updatedAt = new Date();
        this.user = newUser;
        const userReference = db.collection("users").doc(id);
        t.update(userReference, { ...newUser });

        // update sub collection documents
        for (const collection of subCollections) {
          const documents = collection.deviceDocs.filter(document =>
            moment(document.updatedAt).isSameOrAfter(moment(lastBackup)),
          );
          await updateCollectionWithTransaction(t, `/users/${id}/${collection.id}`, documents);
        }

        // set new device documents to be saved in memory
        this.user = newUser;
        this.products = productDeviceDocs;
        this.transactions = transactionDeviceDocs;
        this.categories = categoryDeviceDocs;
        this.summary = JSON.parse(await this.getSummary());
      });
    } catch (error) {
      console.log(error);
      return;
    }

    // update memory
    await this.saveInMemory();
    // update last backup
    await this.setLastBackup();
    console.log("backup: completed");
  }

  async setUserDat(user): Promise<void> {
    await this.storage.ready();
    user.updatedAt = new Date();
    await this.storage.set("user", JSON.stringify(user));
  }

  async getUserDat(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("user");
  }

  async addCategory(data): Promise<void> {
    let categories = JSON.parse(await this.getCategories());
    if (!categories || categories.length === 0) categories = [];

    data.id = uniqid(); // generates a unique id to track categories
    data.updatedAt = new Date();
    categories.push(data);
    await this.storage.set("categories", JSON.stringify(categories));
  }

  async getCategories(): Promise<string | null> {
    await this.storage.ready();
    const categories = JSON.parse(await this.storage.get("categories"));

    let filteredCategories = [];
    if (categories && categories.length) filteredCategories = categories.filter(category => !category.isDisabled);
    return JSON.stringify(filteredCategories);
  }

  async deleteCategory(data): Promise<void> {
    let categories = JSON.parse(await this.getCategories());
    if (!categories) categories = [];

    const changes = {
      updatedAt: new Date(),
      isDisabled: true,
    };
    const newCategories = categories.map(category =>
      category.id === data.id ? { ...category, ...changes } : category,
    );
    await this.storage.set("categories", JSON.stringify(newCategories));
  }

  async getSummary(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("summary");
  }

  async addProduct(data): Promise<void> {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];

    data.updatedAt = new Date();
    products.push(data);
    await this.storage.set("products", JSON.stringify(products));
  }

  async getProducts(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("products");
  }

  async addTransactions(data): Promise<void> {
    let transactions = JSON.parse(await this.getTransactions());
    if (!transactions) transactions = [];

    data.updatedAt = new Date();
    transactions.push(data);
    await this.storage.set("transactions", JSON.stringify(transactions));
  }

  async getTransactions(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("transactions");
  }

  async deleteTransactions(data): Promise<void> {
    let transactions = JSON.parse(await this.getTransactions());
    if (!transactions) transactions = [];

    const changes = {
      updatedAt: new Date(),
      isDisabled: true,
    };
    const newTransactions = transactions.map(transaction =>
      moment(transaction.datetime).isSame(moment(data.datetime)) && transaction.id === data.id
        ? { ...transaction, ...changes }
        : transaction,
    );
    await this.storage.set("transactions", JSON.stringify(newTransactions));
  }

  async searchProduct(barcode): Promise<any[]> {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];
    return products.find(product => product.code === barcode);
  }

  async updateProduct(data, old_code): Promise<void> {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];

    data.updatedAt = new Date();
    const newProducts = products.map(product => (product.code === old_code && product.id === data.id ? data : product));
    await this.storage.set("products", JSON.stringify(newProducts));
  }

  async deleteProduct(data): Promise<void> {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];

    const changes = {
      updatedAt: new Date(),
      isDisabled: true,
    };
    const newProducts = products.map(product =>
      product.code === data.code && product.id === data.id ? { ...product, ...changes } : product,
    );
    await this.storage.set("products", JSON.stringify(newProducts));
  }

  async saveContacts(newContacts, manualAdd: boolean): Promise<void> {
    if (!newContacts || newContacts.length === 0) return;
    await this.storage.ready();
    let contacts = JSON.parse(await this.storage.get("contacts"));
    if (!contacts) contacts = [];

    newContacts.forEach(newContact => {
      const index = contacts.findIndex(contact => contact.displayName == newContact.displayName);
      if (index != -1) {
        const { balance, transacHistory } = contacts[index];
        contacts[index] = {
          ...newContact,
          balance,
          transacHistory,
        };
      } else {
        contacts.push(newContact);
      }
    });

    contacts.sort((a, b) => a.displayName.localeCompare(b.displayName));
    await this.storage.set("contacts", JSON.stringify(contacts));
  }

  async getContacts(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("contacts");
  }

  async updateContactTransaction(contactName, newTransactions): Promise<void> {
    await this.storage.ready();
    const contacts = JSON.parse(await this.getContacts());
    const contact = contacts.find(contact => contact.displayName === contactName);
    let newBalance = contact.balance ? contact.balance : 0;
    newTransactions.forEach(transaction => {
      contact.transacHistory.unshift(transaction);
      newBalance += transaction.amount;
    });
    contact.balance = newBalance;
    await this.storage.set("contacts", JSON.stringify(contacts));
  }

  async setLastBackup(time?: Date): Promise<void> {
    if (!time) time = new Date();
    await this.storage.ready();
    await this.storage.set("lastBackup", time);
  }

  async getLastBackup(): Promise<Date | null> {
    await this.storage.ready();
    return await this.storage.get("lastBackup");
  }

  async storageReady(): Promise<LocalForage> {
    return await this.storage.ready();
  }
}
