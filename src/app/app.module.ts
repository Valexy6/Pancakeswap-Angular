import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';

import { TableBaseComponent } from './shared/table-base/table-base.component';
import { TableBaseTitleComponent } from './shared/table-base/table-base-title/table-base-title.component';
import { TableBaseRowComponent } from './shared/table-base/table-base-row/table-base-row.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalSettingsComponent } from './shared/modal-settings/modal-settings.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    FaqComponent,
    FaqRowComponent,
    TableBaseComponent,
    TableBaseTitleComponent,
    TableBaseRowComponent,
    NavbarComponent,
    ModalSettingsComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
