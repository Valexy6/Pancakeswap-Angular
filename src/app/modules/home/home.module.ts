import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeTableColumnsComponent } from "src/app/modules/home/components/home-table-columns/home-table-columns.component";
import { HomeTableComponent } from "src/app/modules/home/components/home-table/home-table.component";
import { HomepageComponent } from "src/app/modules/home/homepage/homepage.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomepageComponent,
    HomeTableComponent,
    HomeTableColumnsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'home', component: HomepageComponent},
    ])
  ]
})
export class HomeModule {

}