import {Component, OnInit, ViewChild} from '@angular/core';

import {IProduct} from "../../models/prosucts";
import {forkJoin, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {delay, retry} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {IonModal} from "@ionic/angular";
import {OverlayEventDetail} from "@ionic/core/components";
import {DataService} from "../../servises/data.service";
import {AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})


export class PersonComponent implements OnInit {
  @ViewChild('divRef') divRef: ElementRef;

  responses: IProduct[] = [];


  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {
    this.loadData();
  }


  argCall(lat: number, lon: number) {
    this.http.get<IProduct>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cdaede6dc5c5d603980aae86452e12fe`, {}).pipe(
      delay(100),
      retry(2)
    ).subscribe((response) => {
      console.log(response)
      this.responses.push(response);
    })
  }


  ngOnInit(): void {
    this.argCall(32.361668, -86.279167)
    this.argCall(43.618881, -116.215019)
    this.argCall(26.893070, -80.058220)
    this.argCall(39.799999, -89.650002)
    this.argCall(39.742043, -104.991531)
    this.argCall(42.361145, -71.057083)
    this.argCall(31.50905, -87.89444)
    this.argCall(44.3106, -69.7795)
    this.argCall(39.983334, -82.983330)
    this.argCall(30.266666, -97.733330)
  }


  flag1: boolean = false

  flagArr: boolean[] = []
  arg1: string[] = []
  arg2: string[] = []
  arg3: string[] = []
  arg4: string[] = []
  arg5: string[] = []
  arg6: string[] = []

  openD(idx: number, res: IProduct) {
    this.flagArr[idx] = true
    this.arg1[idx] = res.name
    this.arg2[idx] = res.main.temp + ''
    this.arg3[idx] = res.weather[0].description

    this.arg4[idx] = res.wind.speed + ''
    this.arg5[idx] = res.sys.country
    this.arg6[idx] = res.main.feels_like + ''
  }


  listData = []

  async loadData() {
    this.listData = await this.dataService.getData();
  }

  async addData(arg: string) {
    await this.dataService.addData(arg);
    this.loadData();
  }

  async removeItem(index) {
    this.dataService.removeItem(index);
    this.listData.splice(index, 1)
  }


  storageAdd(res: IProduct, idx: number) {

    let str: string = idx + " " + res.name + " " + res.sys.country + " " + res.weather[0].description
    this.addData(str)
  }

  flag2: boolean = true

  clearStorage() {
    this.dataService.clearAll()

    this.flag2 = false
  }


}
