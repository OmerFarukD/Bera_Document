import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(unitPrice: number, rate:number=18): number {
    let value=unitPrice*(rate/100)

    return unitPrice+=value;
  }

}
