import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { EarnFarmsComponent } from './pages/earn-farms/earn-farms.component';
import { EarnPoolsComponent } from './pages/earn-pools/earn-pools.component';
import { EarnComponent } from './pages/earn/earn.component';
import { HomepageContainerComponent } from './pages/homepage-container/homepage-container.component';
import { TradeContainerComponent } from './pages/trade-container/trade-container.component';
import { TradeSwapComponent } from './pages/trade-swap/trade-swap.component';
import { TradeLiquidityComponent } from './pages/trade-liquidity/trade-liquidity.component';
import { TradeAddComponent } from './pages/trade-add/trade-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageContainerComponent},
  { path: 'design-system', component: DesignSystemComponent},
  { path: 'add', component: TradeAddComponent},
  { path: 'trade', component: TradeContainerComponent, children: [
    { path: 'swap', component: TradeSwapComponent},
    { path: 'liquidity', component: TradeLiquidityComponent},
  ]},
  { path: 'earn', component: EarnComponent, children: [
    { path: '', redirectTo: 'farms', pathMatch: 'full'},
    { path: 'farms', component: EarnFarmsComponent },
    { path: 'pools', component: EarnPoolsComponent },
  ]},
  { path: '**', redirectTo: '/home'}
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
