import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, IonSlides, ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageProvider } from '../services/storage/storage';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  data: any;
  text: any;
  videoSet: any;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  storageLocation: string;
  hasSlideBeenVisited;
  currentIndex: number;
  lengthBasedOnLang: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ModalController,
    private dom: DomSanitizer,
    private sp: StorageProvider,
    private translateConfigService: TranslateConfigService,
    public zone: NgZone,
  ) {
    // this.data = this.navParams.get("data");

    // this.getCoach();
    this.currentIndex = 0;
    this.storageLocation = 'gs://open-fintech.appspot.com/tutorial/';
    let langComponent = this.translateConfigService.getCurrentLanguage();
    if (langComponent !== 'en' && langComponent !== 'my') { langComponent = 'en'; }
    this.storageLocation += langComponent + '/Slide';
  }

  // getCoach() {
  //   //console.log(this.listCat + " and "+this.newprodCat);
  //   this.sp.storageReady().then(() => {
  //     this.sp
  //       .getCoach()
  //       .then(val => {
  //         this.data = JSON.parse(val);
  //         //console.log("Addprodpg: "+this.listCat)
  //         //this.getCategories();
  //         console.log(this.data);
  //       })
  //       .catch(err => {
  //         alert("Error: " + err);
  //       });
  //   });
  // }


  async ngOnInit() {
    await firebase
      .firestore()
      .collection('tutorial')
      .get()
      .then(doc => {
        const map = doc.docs[2].data().langLength;
        const lang = this.translateConfigService.getCurrentLanguage();
        if (lang === 'en') {
          this.lengthBasedOnLang = map.en;
        } else if (lang === 'my') {
          this.lengthBasedOnLang = map.my;
        } else {
          this.lengthBasedOnLang = map.en;
        }
      });
    this.lengthBasedOnLang++; // ++ accounting for slide #0 that is not in image folder
    this.zone.run(() => {
      this.hasSlideBeenVisited = new Array(this.lengthBasedOnLang).fill(false);
      this.hasSlideBeenVisited[0] = true;
      console.log(this.lengthBasedOnLang);
    });
  }

  selectSlide(char) {
    if (char === 'o') {
      if (this.currentIndex <= 0) { this.currentIndex = 0; } else if (this.currentIndex >= this.lengthBasedOnLang) { this.currentIndex = this.lengthBasedOnLang - 1; }
      this.slides.slideTo(this.currentIndex, 500);
    } else if (char === 'p') {
      if (this.currentIndex !== 0) { this.slides.slidePrev(150); }
    } else {
      if (this.currentIndex < this.lengthBasedOnLang - 1) { this.slides.slideNext(150); }
    }
  }

  async slideChanged() {
    await this.slides.getActiveIndex().then(ind => {
      this.currentIndex = ind;
    });
    if (this.currentIndex === this.lengthBasedOnLang - 1) { this.slides.lockSwipeToNext(true); } else { this.slides.lockSwipeToNext(false); }
    const img = document.getElementById(this.currentIndex.toString()) as HTMLImageElement;
    if (this.currentIndex === 0 || img.src) {
      this.loadNext(this.currentIndex);
      return;
    }
    this.hasSlideBeenVisited[this.currentIndex] = true;
    let imageString = this.currentIndex.toString() + '.JPG';
    if (this.currentIndex <= 9) {
      // this
      imageString = '0' + imageString; // get rid of this
    } // and this too
    firebase
      .storage()
      .refFromURL(this.storageLocation + imageString)
      .getDownloadURL()
      .then(response => {
        this.zone.run(() => {
          const imageToLoad = document.getElementById(this.currentIndex.toString()) as HTMLImageElement;
          imageToLoad.src = response;
        });
      })
      .catch(error => {
        console.log(error);
        this.slides.slidePrev(10);
      });
    this.loadNext(this.currentIndex);
  }

  loadNext(index: number) {
    const indexToLoad = index + 1;
    if (this.hasSlideBeenVisited[indexToLoad] || indexToLoad >= this.lengthBasedOnLang) {
      return;
    }
    this.hasSlideBeenVisited[indexToLoad] = true;
    let imageString = indexToLoad.toString() + '.JPG';
    if (indexToLoad <= 9) {
      // this too
      imageString = '0' + imageString; // get rid of this
    } // and this
    firebase
      .storage()
      .refFromURL(this.storageLocation + imageString)
      .getDownloadURL()
      .then(response => {
        const imageToLoad = document.getElementById(indexToLoad.toString()) as HTMLImageElement;
        imageToLoad.src = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async ionViewDidLoad() {

  }

  close() {
    this.view.dismiss();
  }

  // navigate() {
  //   //this.navCtrl.push(CoachHomePage);
  //   this.view.dismiss();
  //   this.app.getRootNav().setRoot(CoachHomePage);
  // }
}
