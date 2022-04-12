import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageContainerComponent } from "./homepage-container/homepage-container.component";

const routes: Routes = [
  { path: 'home', component: HomepageContainerComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}