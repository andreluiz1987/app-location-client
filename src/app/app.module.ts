import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { NavComponent } from './nav/nav.component';

import { AgmCoreModule } from '@agm/core';
import { PositionServices } from "src/app/services/position.services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSYbbIT5NSpyz6QTHNGjIJAGElUFauu5s'
    })
  ],
  providers: [PositionServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
