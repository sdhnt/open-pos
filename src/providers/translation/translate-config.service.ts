//translate-config.service.ts
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

// @ts-ignore
@Injectable({
  providedIn: "root",
})
export class TranslateConfigService {
  constructor(private translate: TranslateService) {}

  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    console.log(`device default language: ${language}`);
    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

  getTranslatedMessage(message) {
    return this.translate.get(message);
  }
}
