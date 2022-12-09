import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PersonComponent} from "../pages/person/person.component";
import {CutDatePipe} from "../pipes/cut-date.pipe";
import {VibraneComponent} from "../pages/vibrane/vibrane.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PersonComponent, CutDatePipe, VibraneComponent]
})
export class HomePageModule {}
