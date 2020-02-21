import { Injectable, ViewChild } from "@angular/core";
import { Storage } from "@ionic/storage";
import firebase from "firebase";
import { convertDataToISO } from "ionic-angular/umd/util/datetime-util";
import { LoginPage } from "../../pages/login/login";
import { ToastController, NavController, Nav } from "ionic-angular";
import { notImplemented } from "@angular/core/src/render3/util";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { parse } from "@typescript-eslint/parser";
import moment from "moment";
import { resolveDefinition } from "@angular/core/src/view/util";
import axios from "axios";
import jwt from "jsonwebtoken";

@Injectable()
export class StorageProvider {
  @ViewChild(Nav) nav: Nav;

  //
  products: any = [];
  categories: any = [];
  transactions: any = [];
  user: any = [];
  summary: any = [];

  static get parameters() {
    return [[Storage]];
  }

  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController) {}

  async clearMem() {
    await this.storage.clear();
  }

  tempprod: any;
  tempcat: any;
  temptransac: any;
  tempcontacts: any;
  tempuser: any;
  tempsummary: any;
  tempcoach: any;
  uid;

  async saveInMemory() {
    this.storage.set("categories", "[]").then(() => {
      this.storage.set("categories", JSON.stringify(this.tempcat));
    });
    this.storage.set("products", "[]").then(() => {
      this.storage.set("products", JSON.stringify(this.tempprod));
    });
    this.storage.set("transactions", "[]").then(() => {
      this.storage.set("transactions", JSON.stringify(this.temptransac));
    });
    this.storage.set("user", "{}").then(() => {
      this.storage.set("user", JSON.stringify(this.tempuser));
    });
    this.storage.set("summary", "[]").then(() => {
      this.storage.set("summary", JSON.stringify(this.tempsummary));
    });
    this.storage.set("contacts", "[]").then(() => {
      this.storage.set("contacts", JSON.stringify(this.tempcontacts));
    });
    this.storage.set("coach", "[]").then(() => {
      this.storage.set("coach", JSON.stringify(this.tempcoach));
    });
  }

  async setMem() {
    await this.storage.ready();

    // check if user data is already in memory
    const userInMemory = JSON.parse(await this.storage.get("user"));
    if (userInMemory && userInMemory.id) return true;

    console.log("setMem(): query user data from firestore");
    // query user from firestore
    const db = firebase.firestore();
    const userSnapshot = await db
      .collection("users")
      .where("owner", "==", firebase.auth().currentUser.uid)
      .get();
    const dataSet = [];
    userSnapshot.forEach(doc => {
      dataSet.push({ id: doc.id, user: doc.data() });
    });
    const { id, user } = dataSet[0];
    if (!id) return false;

    // extract categories and business performance (as summary)
    this.tempcat = user.categories;
    if (!user.businessPerformance) {
      this.tempsummary = [];
      for (let i = 0; i <= 30; i++) this.tempsummary.push({ expenses: 0, revenue: 0, profit: 0 });
    } else this.tempsummary = user.businessPerformance;

    // prune user object to reduce data overhead
    for (const key of ["businessPerformance", "categories", "products", "transactions"]) delete user[key];
    this.tempuser = { ...user, id };

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
  //       this.tempcoach = {
  //         video: tempvid,
  //       };
  //       resolve();
  //     });
  //   });
  // }

  // async getCoach() {
  //   return await this.storage.get("coach");
  // }

  backupStorage() {}

  async createFirestoreCollection(db, collectionPath, documents) {
    const batch = db.batch();
    documents.forEach(document => {
      const documentReference = db.collection(collectionPath).doc();
      batch.set(documentReference, document);
    });
    await batch.commit();
  }

  deleteFirestoreCollection(db, collectionPath, batchSize) {
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
  }

  async setUserDat(data) {
    this.tempuser = data;

    this.storage.get("user").then(async valNulluser => {
      this.storage.set("user", "[]").then(() => {
        this.storage.set("user", JSON.stringify(this.tempuser));
      });

      console.log(firebase.auth().currentUser.uid);
      let ud;
      const snapshot = await firebase
        .firestore()
        .collection("users")
        .where("owner", "==", firebase.auth().currentUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            firebase
              .firestore()
              .collection("users")
              .doc(doc.id)
              .update({
                cash_balance: data.cash_balance,
                business_address: data.business_address,
                business_name: data.business_name,
                businesstype: data.businesstype,
                created: data.created,
                logo_url: data.logo_url,
                currency: data.currency,
                discount: data.discount,
                language: data.language,
                owner: data.owner,
                owner_name: data.owner_name,
                ph_no: data.ph_no,
                taxrate: data.taxrate,
                id: doc.id,
              });
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    });
  }

  async getUserDat() {
    return await this.storage.get("user");
    //return this.tempuser;
  }

  //   updateUserDat(data) {
  //     return new Promise((resolve, reject) => {
  //       this.storage.get('').then(async (val) => {
  //         if (val != null) {
  //           this.user = data;//update temp variable
  //           this.storage.set('user', JSON.stringify(this.user));
  // /////////////////////////
  // //update firebase userdat here
  // ////////////////////////////
  //           resolve();
  //         }

  //       })

  //     })
  //   }

  addCategory(data) {
    this.storage.ready().then(() => {
      data.updatedAt = new Date();
      this.storage
        .get("categories")
        .then(val => {
          if (val === null || val == "null") {
            this.storage.set("categories", "[]").then(() => {
              this.storage.get("categories").then(valNull => {
                this.categories = JSON.parse(valNull);
                this.categories.push(data);
                this.storage.set("categories", JSON.stringify(this.categories));
              });
            });
          } else {
            this.categories = JSON.parse(val);
            this.categories.push(data);
            this.storage.set("categories", JSON.stringify(this.categories));
          }
          //this.products = JSON.stringify(this.products)
        })
        .catch(err => {
          alert(err);
        });
    });
  }

  getCategories() {
    return this.storage.get("categories");
  }

  deleteCategory(data) {
    this.storage.ready().then(() => {
      this.storage
        .get("categories")
        .then(val => {
          this.categories = JSON.parse(val);
          let arr = [];
          let arr2 = [];
          arr = this.categories;
          arr2 = arr.filter(val => {
            return val.name != data.name;
          });
          this.storage.set("categories", JSON.stringify(arr2));
        })
        .catch(err => {
          alert(err + 1);
        });
    });
  }

  getSummary() {
    return this.storage.get("summary");
  }

  addProduct(data) {
    this.storage.ready().then(() => {
      data.updatedAt = new Date();
      this.storage
        .get("products")
        .then(val => {
          if (val === null) {
            this.storage.set("products", "[]").then(() => {
              this.storage.get("products").then(valNull => {
                this.products = JSON.parse(valNull);
                this.products.push(data);
                this.storage.set("products", JSON.stringify(this.products));
              });
            });
          } else {
            this.products = JSON.parse(val);
            this.products.push(data);
            this.storage.set("products", JSON.stringify(this.products));
          }
          //this.products = JSON.stringify(this.products)
        })
        .catch(err => {
          alert(err);
        });
    });
  }

  getProducts() {
    return this.storage.get("products");
  }

  addTransactions(data) {
    this.storage.ready().then(() => {
      data.updatedAt = new Date();
      this.storage
        .get("transactions")
        .then(val => {
          //console.log(val);
          if (val === null) {
            this.storage.set("transactions", "[]").then(() => {
              this.storage.get("transactions").then(valNull => {
                this.transactions = JSON.parse(valNull);
                console.log("val " + valNull);
                this.transactions.push(data);
                this.storage.set("transactions", JSON.stringify(this.transactions));
              });
            });
          } else {
            this.transactions = JSON.parse(val);
            console.log("val yada");
            this.transactions.push(data);
            this.storage.set("transactions", JSON.stringify(this.transactions));
          }
          //this.products = JSON.stringify(this.products)
        })
        .catch(err => {
          alert(err);
        });
    });
  }

  getTransactions() {
    return this.storage.get("transactions");
  }

  deleteTransactions(data) {
    this.storage.ready().then(() => {
      this.storage
        .get("transactions")
        .then(val => {
          this.transactions = JSON.parse(val);
          let arr = [];
          let arr2 = [];
          arr = this.transactions;
          arr2 = arr.filter(val => {
            return val.datetime != data.datetime;
          });
          const item = arr.filter(val => {
            return val.datetime == data.datetime;
          });
          //console.log(arr2);
          item[0].isDisabled = 1;
          item[0].updatedAt = new Date();
          arr2.push(item[0]);
          this.storage.set("transactions", JSON.stringify(arr2));
        })
        .catch(err => {
          alert(err);
        });
    });
  }

  searchProduct(barcode) {
    let needle = null;
    return new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage
          .get("products")
          .then(val => {
            if (val != null) {
              this.products = JSON.parse(val);
              needle = this.products.filter(product => {
                return product.code === barcode;
              });
            }

            resolve(needle);
          })
          .catch(err => {
            alert(err + 1);
          });
      });
    });
  }

  updateProduct(data, old_code) {
    return new Promise((resolve, reject) => {
      this.storage.get("products").then(async val => {
        data.updatedAt = new Date();
        if (val != null) {
          const products = JSON.parse(val);
          const newProducts = products.map(product => (product.code === old_code ? data : product));
          await this.storage.set("products", JSON.stringify(newProducts));
          resolve();
        }
      });
    });
  }

  swapProductUp(old_code) {
    const except = null;
    return new Promise((resolve, reject) => {
      this.storage.get("products").then(val => {
        if (val != null) {
          this.products = JSON.parse(val);

          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code == old_code && i != 0) {
              const temp = this.products[i];
              this.products[i] = this.products[i - 1];
              this.products[i - 1] = temp;
            }
          }
          //except.push(data);
          this.storage.set("products", JSON.stringify(this.products));
          resolve();
        }
      });
    });
  }

  swapProductDown(old_code) {
    const except = null;
    return new Promise((resolve, reject) => {
      this.storage.get("products").then(val => {
        if (val != null) {
          this.products = JSON.parse(val);

          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code == old_code && i < this.products.length - 1) {
              const temp = this.products[i];
              this.products[i] = this.products[i + 1];
              this.products[i + 1] = temp;
            }
          }
          //except.push(data);
          this.storage.set("products", JSON.stringify(this.products));
          resolve();
        }
      });
    });
  }

  deleteProduct(data) {
    this.storage.ready().then(() => {
      this.storage
        .get("products")
        .then(val => {
          const products = JSON.parse(val);
          const newProducts = products.map(product =>
            product.code === data.code ? { ...product, updatedAt: new Date(), isDisabled: true } : product,
          );
          this.storage.set("products", JSON.stringify(newProducts));
        })
        .catch(err => {
          alert(err + 1);
        });
    });
  }

  async saveContacts(newContacts, manualAdd: boolean): Promise<void> {
    if(newContacts.length==0) return;
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

  async setLastBackup(time) {
    if (!time) time = new Date();
    await this.storage.ready();
    await this.storage.set("lastBackup", time);
  }

  async getLastBackup() {
    await this.storage.ready();
    return await this.storage.get("lastBackup");
  }

  storageReady() {
    return this.storage.ready();
  }
}
