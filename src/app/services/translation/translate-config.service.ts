import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  constructor(private translate: TranslateService) {}

  getDefaultLanguage() {
    console.log(`device default language:line one ${this.translate.getBrowserLang()}`);
    const language = this.translate.getBrowserLang();
    console.log(`device default language:second line ${language}`);
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

  getTranslatedMessage(message) {
    return this.translate.get(message);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}
