import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "../shared/shared.module";
import { TradeAddComponent } from "./trade-add/trade-add.component";


@NgModule({
  declarations: [
    TradeAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      { path: '', component: TradeAddComponent},
    ])
  ]
})
export class AddModule {

}