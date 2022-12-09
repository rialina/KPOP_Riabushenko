import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../models/prosucts";
import {DataService} from "../../servises/data.service";
import {IonModal} from "@ionic/angular";
import {OverlayEventDetail} from "@ionic/core/components";


@Component({
  selector: 'app-vibrane',
  templateUrl: './vibrane.component.html',
  styleUrls: ['./vibrane.component.scss'],
})
export class VibraneComponent implements OnInit {

  flag1: boolean = false


  constructor( private dataService: DataService) {
    this.loadData();
  }

  ngOnInit() {}

  listData = []

  async loadData(){
    this.listData = await this.dataService.getData();
  }

  async addData(arg: string){
    await this.dataService.addData(arg);
    this.loadData();
  }

  async removeItem(index){
    this.dataService.removeItem(index);
    this.listData.splice(index,1)
  }


  storageAdd(res: IProduct, idx: number){

    let str: string = idx + " " + res.name + " " + res.sys.country + " " + res.weather[0].description
    this.addData(str)
  }

  clearStorage(){
    this.dataService.clearAll()
  }
}
