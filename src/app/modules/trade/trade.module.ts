import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { TradeLiquidityComponent } from "./components/trade-liquidity/trade-liquidity.component";
import { TradeSwapComponent } from "./components/trade-swap/trade-swap.component";
import { TradeContainerComponent } from "./pages/trade-container/trade-container.component";
import { TradeRoutingModule } from "./trade-ruting.module";

@NgModule({
  declarations: [
    TradeContainerComponent,
    TradeLiquidityComponent,
    TradeSwapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TradeRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    TradeContainerComponent,
    TradeLiquidityComponent,
    TradeSwapComponent
  ]
})
export class TradeModule {

}