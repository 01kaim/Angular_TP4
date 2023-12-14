import { Component } from '@angular/core';
import { LanguageService } from './language.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectedLanguage: string = 'en';
  languages = [
    { code: 'en', label: 'English', flag: 'UK' },
    { code: 'fr', label: 'French', flag: 'FR' },
  ];
  constructor(private languageService: LanguageService) {}
  changeLanguage(selectedLanguage: string) {
    this.languageService.useLanguage(selectedLanguage);
  }
}
