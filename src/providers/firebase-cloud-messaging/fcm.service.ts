import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
const messaging = firebase.messaging();

@Injectable()
export class FcmService {
  constructor() {}

  getToken() {
    messaging.onTokenRefresh(() => {
      messaging.getToken().then(token => {
        console.log(`latest device token: ${token}`);
        this.saveToken(token);
      });
    });
  }

  private saveToken(token) {
    if (!token) return;

    const devicesRef = firebase.firestore().collection("devices");

    const data = {
      token,
      userId: firebase.auth().currentUser.uid || "userId",
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    return messaging.onMessage(payload => {
      console.log(`payload: ${payload}`);
    });
  }
}
