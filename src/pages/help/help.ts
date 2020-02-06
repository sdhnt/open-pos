import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, App, Slides } from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";
import { StorageProvider } from "../../providers/storage/storage";
import { TranslateConfigService } from "../../providers/translation/translate-config.service";
import firebase from 'firebase';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-help",
  templateUrl: "help.html",
})
export class HelpPage {
  data: any;
  text: any;
  video_set: any;
  @ViewChild(Slides) slides: Slides;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private dom: DomSanitizer,
    private app: App,
    private sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
  ) {
    //this.data = this.navParams.get("data");
    // this.getCoach();
    this.storageLocation = "gs://open-fintech.appspot.com/tutorial/";
    this.storageLocation+=this.translateConfigService.getCurrentLanguage()+"/Slide";
  }

  storageLocation;
  hasSlideBeenVisited;

  slideChanged(){
    const currentIndex = this.slides.getActiveIndex(); 
    //add logic to make sure only on stop of scroll, this is evaluated, will make firebase usage more efficient
    //can pre-load image of next slide for faster loading and better UX
    if(this.hasSlideBeenVisited[currentIndex]){
      return;
    }
    this.hasSlideBeenVisited[currentIndex] = true;
    let imageString = currentIndex.toString()+".JPG";
    if(currentIndex<=9){
      imageString = "0"+imageString;
    }
    firebase.storage().refFromURL(this.storageLocation+imageString).getDownloadURL()
      .then(response=>{
        let imageToLoad = document.getElementById((currentIndex).toString()) as HTMLImageElement;
        imageToLoad.src = response;
      }).catch(error=>{
        console.log(error);
        this.slides.slidePrev(10);
      });
  }

  getCoach() {
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp
        .getCoach()
        .then(val => {
          this.data = JSON.parse(val);
          //console.log("Addprodpg: "+this.listCat)
          //this.getCategories();
          console.log(this.data);
        })
        .catch(err => {
          alert("Error: " + err);
        });
    });
  }

  openVidVal = -1;

  openVid(i: number) {
    if (i == this.openVidVal) {
      this.openVidVal = -1;
    } else {
      this.openVidVal = i;
    }
  }

  ionViewWillLoad(){
    let lengthBasedOnLang = 0;
    if(this.translateConfigService.getCurrentLanguage()=="en"){
      lengthBasedOnLang = 48;
    } else if(this.translateConfigService.getCurrentLanguage()=="my"){
      lengthBasedOnLang = 46;
    } else{
      console.log(this.translateConfigService.getCurrentLanguage());
      lengthBasedOnLang = 50;
    }
    this.hasSlideBeenVisited = new Array(lengthBasedOnLang).fill(false);
    this.hasSlideBeenVisited[0] = true;
    console.log(lengthBasedOnLang)
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelpPage");
  }

  close() {
    this.view.dismiss();
  }

  // navigate() {
  //   //this.navCtrl.push(CoachHomePage);
  //   this.view.dismiss();
  //   this.app.getRootNav().setRoot(CoachHomePage);
  // }

  secureLink(val: string) {
    return this.dom.bypassSecurityTrustResourceUrl(val);
  }
}
