import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EarnComponent } from "./pages/earn/earn.component";
import { EarnFarmsComponent } from "./pages/earn-farms/earn-farms.component";
import { EarnPoolsComponent } from "./pages/earn-pools/earn-pools.component";


const routes: Routes = [
  { path: '', component: EarnComponent, children: [
    { path: 'farms', component: EarnFarmsComponent},
    { path: 'pools', component: EarnPoolsComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarnRoutingModule {

}