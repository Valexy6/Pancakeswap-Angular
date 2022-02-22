import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemComponent } from './pages/design-system/design-system.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './shared/faq/faq.component';
import { FaqRowComponent } from './shared/faq-row/faq-row.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    FaqComponent,
    FaqRowComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
