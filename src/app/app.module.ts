import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';
import { TableBaseComponent } from './shared/table-base/table-base.component';
import { TableBaseTitleComponent } from './shared/table-base-title/table-base-title.component';
import { TableBaseRowComponent } from './shared/table-base-row/table-base-row.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalSettingsComponent } from './shared/modal-settings/modal-settings.component';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { ModalConnectWalletComponent } from './shared/modal-connect-wallet/modal-connect-wallet.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FooterContainerComponent } from './core/footer-container/footer-container.component';
import { DarkModeComponent } from './shared/dark-mode/dark-mode.component';
import { PancakeTradeComponent } from './shared/pancake-trade/pancake-trade.component';
import { GeneralButtonComponent } from './shared/general-button/general-button.component';
import { ModalClockComponent } from './shared/modal-clock/modal-clock.component';
import { HomepageContainerComponent } from './pages/homepage-container/homepage-container.component';
import { TradeContainerComponent } from './pages/trade-container/trade-container.component';
import { TradeSwapComponent } from './pages/trade-swap/trade-swap.component';
import { TradeLiquidityComponent } from './pages/trade-liquidity/trade-liquidity.component';
import { TradeAddComponent } from './pages/trade-add/trade-add.component';

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
    ModalConnectWalletComponent,
    PaginationComponent,
    FooterContainerComponent,
    DarkModeComponent,
    PancakeTradeComponent,
    GeneralButtonComponent,
    ModalClockComponent,
    HomepageContainerComponent,
    TradeContainerComponent,
    TradeSwapComponent,
    TradeLiquidityComponent,
    TradeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
