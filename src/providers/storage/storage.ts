import { Injectable, ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import firebase from "firebase";
import { ToastController, NavController, Nav } from "ionic-angular";
import moment from "moment";
import { queryUser } from "./utilities";

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

  async saveInMemory() {
    this.storage.set("categories", "[]").then(() => {
      this.storage.set("categories", JSON.stringify(this.categories));
    });
    this.storage.set("products", "[]").then(() => {
      this.storage.set("products", JSON.stringify(this.products));
    });
    this.storage.set("transactions", "[]").then(() => {
      this.storage.set("transactions", JSON.stringify(this.transactions));
    });
    this.storage.set("user", "{}").then(() => {
      this.storage.set("user", JSON.stringify(this.user));
    });
    this.storage.set("summary", "[]").then(() => {
      this.storage.set("summary", JSON.stringify(this.summary));
    });
    this.storage.set("contacts", "[]").then(() => {
      this.storage.set("contacts", JSON.stringify(this.contacts));
    });
    this.storage.set("coach", "{}").then(() => {
      this.storage.set("coach", JSON.stringify(this.coach));
    });
  }

  async setMem() {
    await this.storage.ready();

    // check if user data is already in memory
    const userInMemory = JSON.parse(await this.storage.get("user"));
    const productsInMemory = JSON.parse(await this.getProducts());
    const transactionsInMemory = JSON.parse(await this.getProducts());
    const userCondition = userInMemory && userInMemory.id;
    const productCondition = productsInMemory && productsInMemory.length > 0;
    const transactionCondition = transactionsInMemory && transactionsInMemory.length > 0;
    if (userCondition && productCondition && transactionCondition) return true;

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
    this.categories = user.categories;
    if (!user.businessPerformance) {
      this.summary = [];
      for (let i = 0; i <= 30; i++) this.summary.push({ expenses: 0, revenue: 0, profit: 0 });
    } else this.summary = user.businessPerformance;

    // TODO: query subcollections
    this.products = user.products;
    this.transactions = user.transactions;

    // prune user object to reduce data overhead
    for (const key of ["businessPerformance", "categories", "products", "transactions"]) delete user[key];
    this.user = { ...user, id };

    // save user data in memory
    await this.saveInMemory();
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

  async backupStorage() {
    // TODO: rewrite
  }

  async setUserDat(user) {
    await this.storage.ready();
    await this.storage.set("user", JSON.stringify(user));
    try {
      const { id } = await queryUser();
      const db = firebase.firestore();
      await db
        .collection("users")
        .doc(id)
        .update({ ...user });
    } catch (error) {
      console.log(error);
    }
  }

  async getUserDat(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("user");
  }

  async addCategory(data) {
    let categories = JSON.parse(await this.getCategories());
    if (!categories || categories.length === 0) categories = [];

    data.updatedAt = new Date();
    categories.push(data);
    await this.storage.set("categories", JSON.stringify(categories));
  }

  async getCategories(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("categories");
  }

  async deleteCategory(data) {
    let categories = JSON.parse(await this.getCategories());
    if (!categories) categories = [];

    const newCategories = categories.filter(category => category.name !== data.name);
    await this.storage.set("categories", JSON.stringify(newCategories));
  }

  async getSummary(): Promise<string | null> {
    await this.storage.ready();
    return await this.storage.get("summary");
  }

  async addProduct(data) {
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

  async addTransactions(data) {
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

  async deleteTransactions(data) {
    let transactions = JSON.parse(await this.getTransactions());
    if (!transactions) transactions = [];

    data.updatedAt = new Date();
    data.isDisabled = true;
    const newTransactions = transactions.map(transaction =>
      moment(transaction.datetime).isSame(moment(data.datetime)) ? data : transaction,
    );
    await this.storage.set("transactions", newTransactions);
  }

  async searchProduct(barcode) {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];
    return products.find(product => product.code === barcode);
  }

  async updateProduct(data, old_code) {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];

    data.updatedAt = new Date();
    const newProducts = products.map(product => (product.code === old_code ? data : product));
    await this.storage.set("products", JSON.stringify(newProducts));
  }

  async deleteProduct(data) {
    let products = JSON.parse(await this.getProducts());
    if (!products) products = [];

    data.updatedAt = new Date();
    data.isDisabled = true;
    const newProducts = products.map(product => (product.code === data.code ? data : product));
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

  async storageReady() {
    return await this.storage.ready();
  }
}
