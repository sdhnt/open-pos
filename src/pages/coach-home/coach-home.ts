import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoachGoalsPage } from '../coach-goals/coach-goals';
import { CoachCoachPage } from '../coach-coach/coach-coach';
import { CoachBusinesstipsPage } from '../coach-businesstips/coach-businesstips';
import { ContactUsPageModule } from '../contact-us/contact-us.module';
import { ContactUsPage } from '../contact-us/contact-us';

/**
 * Generated class for the CoachHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coach-home',
  templateUrl: 'coach-home.html',
})
export class CoachHomePage {

  

  Goals=CoachGoalsPage;
  Coach=CoachCoachPage;
  Tips=CoachBusinesstipsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoachHomePage');
  }

  contactpg(){
    this.navCtrl.push(ContactUsPage);
  }

}
