import { Injectable } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";

// @ts-ignore
@Injectable({
  providedIn: "root",
})
export class GeolocationService {
  constructor(private geolocation: Geolocation) {}

  getCoordinates() {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.geolocation
        .getCurrentPosition()
        .then(position => {
          console.log(`geolocation -> latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
          resolve(position.coords);
        })
        .catch(reject);
    });
  }
}
