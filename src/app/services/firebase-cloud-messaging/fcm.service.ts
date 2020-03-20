import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  constructor(private toastCtrl: ToastController) {}

  async getToken() {
    const messaging = firebase.messaging();
    await messaging.getToken().then(token => {
      console.log(`latest device token: ${token}`);
      this.saveToken(token);
    });
  }

  private saveToken(token) {
    if (!token) { return; }

    const devicesRef = firebase.firestore().collection('devices');

    const data = {
      token,
      userId: firebase.auth().currentUser.uid || 'userId',
    };

    return devicesRef.doc(token).set(data);
  }

  private async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
    });
    await toast.present();
  }

  onNotifications() {
    const messaging = firebase.messaging();
    messaging.onMessage(payload => {
      console.log(`payload: ${payload}`);
      this.presentToast(payload.notification.body);
    });
  }
}
