import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-seventh-task',
  templateUrl: './seventh-task.component.html',
  styleUrls: ['./seventh-task.component.css']
})
export class SeventhTaskComponent implements OnInit {
  radius: number = 0;
  isDisplay: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculateLength() {
    return 2 * Math.PI * this.radius;
  }
  calculateArea(){
    return Math.PI * Math.pow(this.radius,2);
  }

  calculateVolume() {
    return 4 * Math.PI * Math.pow(this.radius,2);
  }
}
