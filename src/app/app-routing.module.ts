import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'design-system', loadChildren: () => import('./modules/design-system/design-system.module').then( m => m.DesignSystemModule)},
  { path: 'add', loadChildren: () => import('./modules/add/add.module').then( m => m.AddModule)},
  { path: 'trade', loadChildren: () => import('./modules/trade/trade.module').then( m => m.TradeModule)},
  { path: 'page-not-found', loadChildren: () => import('./modules/not-found/not-found.module').then( m => m.NotFound)},
  { path: '**', redirectTo: '/page-not-found' },
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
