import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { EarnFarmsComponent } from './pages/earn-farms/earn-farms.component';
import { EarnPoolsComponent } from './pages/earn-pools/earn-pools.component';
import { EarnComponent } from './pages/earn/earn.component';
import { HomepageContainerComponent } from './pages/homepage-container/homepage-container.component';

const routes: Routes = [
  { path: 'home', component: HomepageContainerComponent },
  { path: 'earn', component: EarnComponent, children: [
    { path: '', redirectTo: 'farms', pathMatch: 'full'},
    { path: 'farms', component: EarnFarmsComponent },
    { path: 'pools', component: EarnPoolsComponent },
  ]},
  { path: 'design-system', component: DesignSystemComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
