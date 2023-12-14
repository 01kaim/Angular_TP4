//create language service
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {}
  useLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }
}
