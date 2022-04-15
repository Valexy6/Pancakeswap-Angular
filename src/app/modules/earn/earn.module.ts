import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { TableFiltersComponent } from "./components/table-filters/table-filters.component";
import { TableSingleComponent } from "./components/table-single/table-single.component";
import { TableComponent } from "./components/table/table.component";
import { EarnRoutingModule } from "./earn-routing.module";
import { EarnComponent } from "./pages/earn/earn.component";
import { EarnFarmsComponent } from "./pages/earn-farms/earn-farms.component";
import { EarnPoolsComponent } from "./pages/earn-pools/earn-pools.component";

@NgModule({
  declarations: [
    EarnComponent,
    EarnFarmsComponent,
    EarnPoolsComponent,
    TableComponent,
    TableFiltersComponent,
    TableSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    EarnRoutingModule
  ]
})
export class EarnModule {

}