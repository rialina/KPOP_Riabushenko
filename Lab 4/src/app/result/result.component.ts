import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnChanges {
  @Input() numbers: number[] = [];
  inBetween: number[] = [];
  ngOnInit(): void {}

  findRoots(): [number, number] {
    let k1 = this.numbers[0];
    let k2 = this.numbers[1];
    let k3 = this.numbers[2];

    const D = Math.pow(k2, 2) - 4 * k1 * k3;
    const root1 = (-k2 + Math.sqrt(D)) / (2 * k1);
    const root2 = (-k2 - Math.sqrt(D)) / (2 * k1);
    return [root1, root2];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inBetween = [];
    let roots: any = this.findRoots();
    this.inBetween.push(roots[0]);
    this.inBetween.push(roots[1]);
  }
}
