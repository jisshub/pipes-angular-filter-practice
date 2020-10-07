import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, brandSearch: string, brand: string): any {
    if (value.length === 0 || brandSearch === '') {
      return value;
    }
    const finalArr: string[] = [];

    for (const phone of value) {
      if (phone[brand] === brandSearch) {
        finalArr.push(phone);
      }
    }
    return finalArr;
  }
}
