import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DesignSystemComponent } from "./design-system/design-system.component";

@NgModule({
  declarations: [DesignSystemComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DesignSystemComponent},
    ])
  ]
})
export class DesignSystemModule {

}