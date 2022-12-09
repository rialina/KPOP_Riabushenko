import {HttpClient} from "@angular/common/http";
import {IProduct} from "../models/prosucts";
import {Observable} from "rxjs";
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient
  ) {
  }



}
