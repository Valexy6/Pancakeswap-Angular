import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterContainerComponent } from './layout/footer-container/footer-container.component';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterContainerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
