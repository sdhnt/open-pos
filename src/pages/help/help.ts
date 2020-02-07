import { Component, ViewChild, NgZone } from "@angular/core";
import { IonicPage, NavController, NavParams, ViewController, Slides } from "ionic-angular";
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
    private sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
    public zone: NgZone
  ) {
    //this.data = this.navParams.get("data");
    // this.getCoach();
    this.storageLocation = "gs://open-fintech.appspot.com/tutorial/";
    let langComponent = this.translateConfigService.getCurrentLanguage();
    if(langComponent!="en" && langComponent!="my") 
      langComponent = "en";
    this.storageLocation+=langComponent+"/Slide";
  }

  storageLocation: string;
  hasSlideBeenVisited;

  slideChanged(){
    const currentIndex = this.slides.getActiveIndex(); 
    if(this.hasSlideBeenVisited[currentIndex]){
      this.loadNext(currentIndex);
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
    this.loadNext(currentIndex);
  }

  loadNext(index:number){
    let indexToLoad = index+1;
    if(this.hasSlideBeenVisited[indexToLoad] || indexToLoad>=this.lengthBasedOnLang){
      return;
    }
    this.hasSlideBeenVisited[indexToLoad] = true;
    let imageString = indexToLoad.toString()+".JPG";
    if(indexToLoad<=9){
      imageString = "0"+imageString;
    }
    firebase.storage().refFromURL(this.storageLocation+imageString).getDownloadURL()
      .then(response=>{
        let imageToLoad = document.getElementById(indexToLoad.toString()) as HTMLImageElement;
        imageToLoad.src = response;
      }).catch(error=>{
        console.log(error);
      })
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

  lengthBasedOnLang: number;

  ionViewWillLoad(){
    if(this.translateConfigService.getCurrentLanguage()=="en"){
      this.lengthBasedOnLang = 48;
    } else if(this.translateConfigService.getCurrentLanguage()=="my"){
      this.lengthBasedOnLang = 46;
    } else{
      console.log(this.translateConfigService.getCurrentLanguage());
      this.lengthBasedOnLang = 48;
    }
    this.zone.run(()=>{
      this.hasSlideBeenVisited = new Array(this.lengthBasedOnLang).fill(false);
      this.hasSlideBeenVisited[0] = true;
      console.log(this.lengthBasedOnLang);
    })
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
