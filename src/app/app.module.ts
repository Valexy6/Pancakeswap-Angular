import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalSettingsComponent } from './shared/modal-settings/modal-settings.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { ModalConnectWalletComponent } from './shared/modal-connect-wallet/modal-connect-wallet.component';
import { FooterContainerComponent } from './core/footer-container/footer-container.component';
import { DarkModeComponent } from './shared/dark-mode/dark-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    FaqComponent,
    FaqRowComponent,
    NavbarComponent,
    ModalSettingsComponent,
    LanguageSelectorComponent,
    ModalConnectWalletComponent,
    FooterContainerComponent,
    DarkModeComponent,
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
