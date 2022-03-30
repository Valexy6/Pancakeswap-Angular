import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { HomepageContainerComponent } from './pages/homepage-container/homepage-container.component';
import { TradeContainerComponent } from './pages/trade-container/trade-container.component';
import { TradeSwapComponent } from './pages/trade-swap/trade-swap.component';
import { TradeLiquidityComponent } from './pages/trade-liquidity/trade-liquidity.component';

const routes: Routes = [
  { path: '', component: HomepageContainerComponent},
  { path: 'home', component: HomepageContainerComponent},
  { path: 'design-system', component: DesignSystemComponent},
  { path: 'trade', component: TradeContainerComponent, children: [
    { path: 'swap', component: TradeSwapComponent},
    { path: 'liquidity', component: TradeLiquidityComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
