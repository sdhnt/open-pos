import { Injectable, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { ThrowStmt, unescapeIdentifier } from '@angular/compiler';
import { convertDataToISO } from 'ionic-angular/umd/util/datetime-util';
import { LoginPage } from '../../pages/login/login';
import { ToastController, NavController, Nav } from 'ionic-angular';
import { notImplemented } from '@angular/core/src/render3/util';

@Injectable()
export class StorageProvider {
  @ViewChild(Nav) nav: Nav;

  //
  products: any = [];
  categories: any = [];
  transactions: any = [];
  user: any =[];

  static get parameters() {
    return [[Storage]];
  }


  constructor(
    public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController
  ) {
  }

  clearMem() {
    this.storage.clear();
  }

  tempprod: any;
  tempcat: any;
  temptransac: any;
  tempuser: any;
  uid;
  

  async saveinMem(){
    return new Promise((resolve, reject)=>{
 //console.log("Hey"+this.tempcat)
 this.storage.get('categories').then((valNullcat) => {
  this.storage.get('products').then((valNullprod) => {
    this.storage.get('transactions').then((valNulltransac) => {
      this.storage.get('user').then((valNulluser)=>{   
        // console.log("b4set");
        // console.log(JSON.stringify(this.tempcat));
        // console.log(JSON.stringify(this.tempprod));
        // console.log(JSON.stringify(this.temptransac))  ;
        this.storage.set('categories', "[]").then(() => {this.storage.set('categories', JSON.stringify(this.tempcat));})
        this.storage.set('products', "[]").then(() => {this.storage.set('products', JSON.stringify(this.tempprod));})
        this.storage.set('transactions', "[]").then(() => {this.storage.set('transactions', JSON.stringify(this.temptransac));})
        this.storage.set('user','[]').then(() => {this.storage.set('user', JSON.stringify(this.tempuser));})
        resolve();
      })
      })
     })
   })
    })
   
  }

  async setMem(){
    var tempprod;
    var tempcat;
    var temptransac;
    var uid;
    var tempuser;
    this.storage.ready().then(async ()=>{
      await firebase.firestore().collection('users').where("owner", "==", firebase.auth().currentUser.uid).get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                uid = doc.id;
                var usdat=doc.data();
                tempprod=usdat.products;
                temptransac=usdat.transactions;
                tempcat=usdat.categories;
                tempuser={
                  business_address: usdat.business_address,
                  business_name: usdat.business_name,
                  businesstype: usdat.businesstype,
                  cash_balance: usdat.cash_balance,
                  created: usdat.created,
                  currency: usdat.currency,
                  discount: usdat.discount,
                  language: usdat.language,
                  owner: usdat.owner,
                  owner_name: usdat.owner_name,
                  ph_no: usdat.ph_no,
                  taxrate: usdat.taxrate,
                  id: doc.id,
                }
              });             
            })
            .catch(function (error) {
              console.log("Error getting documents: ", error);
            });
            this.tempcat=tempcat;
            this.tempprod=tempprod;
            this.temptransac=temptransac;
            this.uid=uid;
            this.tempuser=tempuser;
            // console.log("setglobal");
            // console.log(JSON.stringify(tempcat));
            // console.log(JSON.stringify(tempprod));
            // console.log(JSON.stringify(temptransac))  ;
            await this.saveinMem();
            return await (this.uid!=null)
      })

    
  }

  backupStorage() {
    var uid;
    var parseprod;
    var parsetransac;
    var parsecat;

      this.storage.ready().then(() => {
      this.storage.get('products').then((val) => {
       
        parseprod = JSON.parse(val);
        this.storage.get('transactions').then((val) => {
         parsetransac = JSON.parse(val);
          this.storage.get('categories').then((val) => {
            parsecat = JSON.parse(val);
  
            if(parseprod!=null && parsetransac!=null && parsecat!=null){
            const snapshot = firebase.firestore().collection('users').where("owner", "==", firebase.auth().currentUser.uid).get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                uid = doc.id;
                console.log(uid);
                firebase.firestore().collection("users").doc(uid).update({
                  "products": parseprod,
                  "transactions": parsetransac,
                  "categories": parsecat,
                }).then(async (doc) => {
                }).catch((err) => {
                  console.log(err)
                });
              });
            })
            .catch(function (error) {
              console.log("Error getting documents: ", error);
            });
          }
          }).catch(err => {
            alert(err);
          })
        }).catch(err => {
          alert(err);
        })
      }).catch(err => {
        alert(err);
      })
    })
  }


 async setUserDat(data){

  this.tempuser=data;

  this.storage.get('user').then(async (valNulluser)=>{   
    this.storage.set('user','[]').then(() => {this.storage.set('user', JSON.stringify(this.tempuser));});

    
    console.log(firebase.auth().currentUser.uid);
    var ud;
    const snapshot = await firebase.firestore().collection('users').where("owner","==",firebase.auth().currentUser.uid).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          firebase.firestore().collection("users").doc(doc.id).update({
            cash_balance:  data.cash_balance,
            business_address: data.business_address,
            business_name: data.business_name,
            businesstype: data.businesstype,
            created: data.created,
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
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });

  });


 }


  async getUserDat() {
    return await this.storage.get('user');
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
      this.storage.get('categories').then((val) => {
        if (val === null || val=="null") {
          this.storage.set('categories', "[]").then(() => {
            this.storage.get('categories').then((valNull) => {
              this.categories = JSON.parse(valNull);
              this.categories.push(data);
              this.storage.set('categories', JSON.stringify(this.categories));
            })
          })
        } else {
          this.categories = JSON.parse(val);
          this.categories.push(data);
          this.storage.set('categories', JSON.stringify(this.categories));
        }
        //this.products = JSON.stringify(this.products)
      }).catch(err => {
        alert(err);
      })
    })
  }

  getCategories() {
    return this.storage.get('categories');
  }

  deleteCategory(data) {
    this.storage.ready().then(() => {
      this.storage.get('categories').then((val) => {
        this.categories = JSON.parse(val);
        let arr = [];
        let arr2 = [];
        arr = this.categories;
        arr2 = arr.filter((val) => {
          return (val.name != data.name);
        })
        this.storage.set('categories', JSON.stringify(arr2));
      }).catch(err => {
        alert(err + 1);
      })
    })
  }


  addProduct(data) {
    this.storage.ready().then(() => {
      this.storage.get('products').then((val) => {
        if (val === null) {
          this.storage.set('products', "[]").then(() => {
            this.storage.get('products').then((valNull) => {
              this.products = JSON.parse(valNull);
              this.products.push(data);
              this.storage.set('products', JSON.stringify(this.products));
            })
          })
        } else {
          this.products = JSON.parse(val);
          this.products.push(data);
          this.storage.set('products', JSON.stringify(this.products));
        }
        //this.products = JSON.stringify(this.products)
      }).catch(err => {
        alert(err);
      })
    })
  }

  getProducts() {
    return this.storage.get('products');
  }


  addTransactions(data) {
    this.storage.ready().then(() => {
      this.storage.get('transactions').then((val) => {
        //console.log(val);
        if (val === null) {
          this.storage.set('transactions', "[]").then(() => {
            this.storage.get('transactions').then((valNull) => {
              this.transactions = JSON.parse(valNull);
              console.log("val "+valNull)
              this.transactions.push(data);
              this.storage.set('transactions', JSON.stringify(this.transactions));
            })
          })
        } else {
          this.transactions = JSON.parse(val);
          console.log("val yada");
          this.transactions.push(data);
          this.storage.set('transactions', JSON.stringify(this.transactions));
        }
        //this.products = JSON.stringify(this.products)
      }).catch(err => {
        alert(err);
      })
    })
  }

  getTransactions() {
    return this.storage.get('transactions');
  }

  searchProduct(barcode) {
    let needle = null;
    return new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage.get('products').then((val) => {
          if (val != null) {
            this.products = JSON.parse(val);
            needle = this.products.filter((product) => {
              return (product.code === barcode);
            })
          }

          resolve(needle);
        }).catch(err => {
          alert(err + 1);
        })
      })
    })
  }

  updateProduct(data, old_code) {
    let except = null;
    return new Promise((resolve, reject) => {
      this.storage.get('products').then((val) => {
        if (val != null) {
          this.products = JSON.parse(val);
          except = this.products.filter((product) => {
            return (product.code != old_code);
          });
          except.push(data);
          this.storage.set('products', JSON.stringify(except));
          resolve();
        }
      })

    })
  }

  swapProductUp(old_code) {
    let except = null;
    return new Promise((resolve, reject) => {
      this.storage.get('products').then((val) => {
        if (val != null) {
          this.products = JSON.parse(val);


          for (var i = 0; i < this.products.length; i++) {

            if (this.products[i].code == old_code && i != 0) {
              var temp = this.products[i];
              this.products[i] = this.products[i - 1];
              this.products[i - 1] = temp;
            }
          }
          //except.push(data);
          this.storage.set('products', JSON.stringify(this.products));
          resolve();
        }
      })

    })
  }

  swapProductDown(old_code) {
    let except = null;
    return new Promise((resolve, reject) => {
      this.storage.get('products').then((val) => {
        if (val != null) {
          this.products = JSON.parse(val);


          for (var i = 0; i < this.products.length; i++) {

            if (this.products[i].code == old_code && i < (this.products.length - 1)) {
              var temp = this.products[i];
              this.products[i] = this.products[i + 1];
              this.products[i + 1] = temp;
            }
          }
          //except.push(data);
          this.storage.set('products', JSON.stringify(this.products));
          resolve();
        }
      })

    })
  }

  deleteProduct(data) {
    this.storage.ready().then(() => {
      this.storage.get('products').then((val) => {
        this.products = JSON.parse(val);
        let arr = [];
        let arr2 = [];
        arr = this.products;
        arr2 = arr.filter((val) => {
          return (val.code != data.code && val.name != data.name);
        })
        this.storage.set('products', JSON.stringify(arr2));
      }).catch(err => {
        alert(err + 1);
      })
    })
  }

  storageReady() {
    return this.storage.ready();
  }

}
