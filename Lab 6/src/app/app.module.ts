import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage-angular';
import {DataService} from "./servises/data.service";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: "mydatabase"
    }),
    AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
