import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { HomepageContainerComponent } from './pages/homepage-container/homepage-container.component';

const routes: Routes = [
  { path: '', component: HomepageContainerComponent},
  { path: 'home', component: HomepageContainerComponent},
  { path: 'design-system', component: DesignSystemComponent},
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
