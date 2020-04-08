import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class Html2canvasService {

  constructor() { }

  public html2canvas(ele) {

    if (!ele) {
      return;
    }

    const option = { allowTaint: true };
    return html2canvas(ele, option).then((canvas) => {
      if (canvas) {
        canvas.getContext('2d');
        console.log('this is service line 20', canvas.toDataURL('image/png'));
        return canvas.toDataURL('image/png');
      }
      return null;
    }).catch((res) => {
      console.log(res);
      return res;
    });
  }
}
