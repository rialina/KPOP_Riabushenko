import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  numbers: number[] = [];
  input = '';

  ngOnInit(): void {}

  getNumbers(): void {
    const valuesArray = this.input.trim().split(/\s+/);
    const numbersArray: number[] = [];
    valuesArray.forEach((element) => {
      const casted = parseFloat(element);
      if (!isNaN(casted)) {
        numbersArray.push(casted);
      }
    });
    this.numbers = numbersArray;
  }
}
