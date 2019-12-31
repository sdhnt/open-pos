import { Injectable } from "@angular/core";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import firebase from "firebase";

@Injectable()
export class FcmService {
  constructor(private firebaseX: FirebaseX) {}

  async getToken() {
    const token = await this.firebaseX.getToken();
    this.saveToken(token);
  }

  private saveToken(token) {
    if (!token) return;

    const devicesRef = firebase.firestore().collection("devices");

    const data = {
      token,
      userId: firebase.auth().currentUser.uid,
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    return this.firebaseX.onMessageReceived();
  }
}
