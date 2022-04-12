import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DarkModeComponent } from "./components/dark-mode/dark-mode.component";
import { FaqRowComponent } from "./components/faq-row/faq-row.component";
import { FaqComponent } from "./components/faq/faq.component";
import { GeneralButtonComponent } from "./components/general-button/general-button.component";
import { LanguageSelectorComponent } from "./components/language-selector/language-selector.component";
import { ModalClockComponent } from "./components/modal-clock/modal-clock.component";
import { ModalConnectWalletComponent } from "./components/modal-connect-wallet/modal-connect-wallet.component";
import { ModalSettingsComponent } from "./components/modal-settings/modal-settings.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { PancakeTradeComponent } from "./components/pancake-trade/pancake-trade.component";
import { TableBaseRowComponent } from "./components/table-base-row/table-base-row.component";
import { TableBaseTitleComponent } from "./components/table-base-title/table-base-title.component";
import { TableBaseComponent } from "./components/table-base/table-base.component";

@NgModule({
  declarations: [
    GeneralButtonComponent,
    ModalConnectWalletComponent,
    FaqComponent,
    FaqRowComponent,
    TableBaseComponent,
    TableBaseTitleComponent,
    TableBaseRowComponent,
    ModalSettingsComponent,
    LanguageSelectorComponent,
    PaginationComponent,
    PancakeTradeComponent,
    ModalClockComponent,
    DarkModeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  exports: [
    GeneralButtonComponent,
    ModalConnectWalletComponent,
    FaqComponent,
    FaqRowComponent,
    TableBaseComponent,
    TableBaseTitleComponent,
    TableBaseRowComponent,
    ModalSettingsComponent,
    LanguageSelectorComponent,
    PaginationComponent,
    PancakeTradeComponent,
    ModalClockComponent,
    DarkModeComponent
  ]
})
export class SharedModule {

}