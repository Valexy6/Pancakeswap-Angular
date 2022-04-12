import { Injectable } from '@angular/core';
import { ILanguage } from 'src/app/models/Language';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages: ILanguage[] = [
    {
      language: 'العربية',
      initials: 'ar',
    },
    {
      language: 'বাংলা',
      initials: 'bn',
    },
    {
      language: 'English',
      initials: 'en',
    },
    {
      language: 'Deutsch',
      initials: 'de',
    },
    {
      language: 'Ελληνικά',
      initials: 'el',
    },
    {
      language: 'Español',
      initials: 'es-es',
    },
    {
      language: 'Suomalainen',
      initials: 'fi',
    },
    {
      language: 'Filipino',
      initials: 'fil',
    },
    {
      language: 'Français',
      initials: 'fr',
    },
    {
      language: 'हिंदी',
      initials: 'hi',
    },
    {
      language: 'Magyar',
      initials: 'hu',
    },
    {
      language: 'Bahasa Indonesia',
      initials: 'id',
    },
    {
      language: 'Italiano',
      initials: 'it',
    },
    {
      language: '日本語',
      initials: 'ja',
    },
    {
      language: '한국어',
      initials: 'ko',
    },
    {
      language: 'Nederlands',
      initials: 'nl',
    },
    {
      language: 'Polski',
      initials: 'pl',
    },
    {
      language: 'Português (Brazil)',
      initials: 'pt-br',
    },
    {
      language: 'Português',
      initials: 'pt-pt',
    },
    {
      language: 'Română',
      initials: 'ro',
    },
    {
      language: 'Русский',
      initials: 'ru',
    },
    {
      language: 'Svenska',
      initials: 'sv',
    },
    {
      language: 'தமிழ்',
      initials: 'ta',
    },
    {
      language: 'Türkçe',
      initials: 'tr',
    },
    {
      language: 'Українська',
      initials: 'uk',
    },
    {
      language: 'Tiếng Việt',
      initials: 'vi',
    },
    {
      language: '简体中文',
      initials: 'zh-ch',
    },
    {
      language: '繁體中文',
      initials: 'zh-tw',
    },
  ]

  constructor() { }

  getAll(): ILanguage[] {
    return this.languages;
  }
}
