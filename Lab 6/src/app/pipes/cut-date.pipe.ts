import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cutDate'
})

export class CutDatePipe implements PipeTransform {

  transform(f:string): string {
    return f.slice(0,10);
  }

}
