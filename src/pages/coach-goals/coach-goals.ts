import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import firebase from "firebase";
import { DomSanitizer } from "@angular/platform-browser";
import { StorageProvider } from "../../providers/storage/storage";

/**
 * Generated class for the CoachGoalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-coach-goals",
  templateUrl: "coach-goals.html",
})
export class CoachGoalsPage {
  videoLinks;
  constructor(
    public navCtrl: NavController,
    private translateConfigService: TranslateConfigService,
    public navParams: NavParams,
    private dom: DomSanitizer,
    public sp: StorageProvider,
  ) {
    firebase
      .firestore()
      .collection("contact-us")
      .get()
      .then(doc => {
        this.videoLinks = doc.docs[1].data().video;
        this.videoLinks.forEach(element => {
          element.date = this.getDateTime(parseInt(element.date));
          //var date1=new Date(parseInt(element.date));
          console.log(element.date);
        });
      });

      firebase
      .firestore()
      .collection("tutorial").get().then( doc=> {
        //console.log(doc)
        doc.docs.forEach(element => {
          console.log(element.id + " "+ this.userdata.language)  
           if(element.id==this.userdata.language){
             element.data().video.forEach(element2 => {
               this.vidlist.push(element2);       
            });
             this.vidlist = element.data().video;
           }
        });
      
      })
      ;
     
    console.log(this.userlang);
  }
  vidlist=[];
  userdata: any = {
    business_address: "",
    business_name: "",
    cash_balance: "",
    currency: "",
    created: "",
    language: this.translateConfigService.getCurrentLanguage(),
    owner: "",
    owner_name: "",
    ph_no: "",
    businesstype: "",
    taxrate: 0.0,
    discount: 0.0,
  };

  async getUserData() {
    this.sp.storageReady().then(() => {
      this.sp
        .getUserDat()
        .then(val => {
          this.userdata = JSON.parse(val);
          console.log(this.userdata);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  userlang = this.translateConfigService.getCurrentLanguage();

  getDateTime(datetime) {
    //return (datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime. getFullYear())
    const temp = new Date(datetime);
    //console.log(temp);
    //const temp1 = temp;

    const t =
      temp.getDate().toString() +
      "/" +
      (temp.getMonth() + 1).toString() +
      "/" +
      temp.getFullYear().toString() +
      " " +
      this.getHours(temp) +
      ":" +
      this.getMinutes(temp);
    return t;
    //if any hours or mins <0 then need to add 0 4 use cases
  }

  getHours(datetime) {
    const temp = new Date(datetime);
    const t = temp.getHours();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  getMinutes(datetime) {
    const temp = new Date(datetime);
    const t = temp.getMinutes();
    if (t > 9) {
      return t.toString();
    } else {
      return "0" + t.toString();
    }
  }

  playVid() {}

  //  player;
  //     onYouTubeIframeAPIReady() {
  //       this.player = new YT.Player('player', {
  //         height: '390',
  //         width: '640',
  //         videoId: 'M7lc1UVf-VE',
  //       });
  //     }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CoachGoalsPage");
  }

  linkValue(val: string) {
    return this.dom.bypassSecurityTrustResourceUrl(val);
  }
}
