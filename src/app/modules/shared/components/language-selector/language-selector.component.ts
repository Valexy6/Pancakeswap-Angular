import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ILanguage } from 'src/app/models/Language';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() isNavbar: boolean = false;
  @Input() isFooter: boolean = false;
  @Input() langSelected: string = 'en';
  @Input() isDarkModeOn: boolean = false;
  @Output() navLangSelected = new EventEmitter<string>();

  languages: ILanguage[] = []

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languages = this.languageService.getAll();
  }

  setLang(value: string): string {
    this.langSelected = value;
    this.navLangSelected.emit(this.langSelected);
    return this.langSelected;
  }

}
