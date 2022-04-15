import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TradeAddComponent } from "./trade-add/trade-add.component";


@NgModule({
  declarations: [
    TradeAddComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TradeAddComponent},
    ])
  ]
})
export class AddModule {

}