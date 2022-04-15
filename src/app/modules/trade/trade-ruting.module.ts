import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TradeLiquidityComponent } from "./components/trade-liquidity/trade-liquidity.component";
import { TradeSwapComponent } from "./components/trade-swap/trade-swap.component";
import { TradeContainerComponent } from "./pages/trade-container/trade-container.component";

const routes: Routes = [
  { path: '', component: TradeContainerComponent, children: [
    { path: 'swap', component: TradeSwapComponent},
    { path: 'liquidity', component: TradeLiquidityComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule {

}