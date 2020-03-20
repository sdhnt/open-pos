import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import * as firebase from 'firebase';
import { TranslateConfigService } from '../services/translation/translate-config.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  email = 'Loading...';
  phone = [];
  chatbot = '';

  constructor(
    private translateConfigService: TranslateConfigService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
  ) {
    this.getInfo();
  }

  ngOnInit() {

  }

  getInfo() {
    firebase
      .firestore()
      .collection('contact-us')
      .get()
      .then(doc => {
        this.email = doc.docs[0].data().email;
        this.phone = doc.docs[0].data().phone;
        this.chatbot = doc.docs[0].data().chatbot;
      });
  }

  navFB() {
    window.open(this.chatbot, '_system', 'location=no');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  call(numberToCall) {
    this.callNumber
      .callNumber(numberToCall, false)
      .then(res => {
        console.log('Successful', res);
      })
      .catch(err => console.log('Error with dialing', err));
  }

  sendMail() {
    const emailSettings = {
      to: this.email,
      subject: 'OPEN Help', // edit as and when needed
      body: 'Hello! I need your help!',
      isHTML: true,
    };
    // this.emailComposer.requestPermission()
    //   .then((response:boolean)=>{
    //     if(response){

    //     }
    //   });
    this.emailComposer
      .open(emailSettings)
      .then(res => console.log('Successful', res))
      .catch(err => console.log('Error on email', err));
  }
}
