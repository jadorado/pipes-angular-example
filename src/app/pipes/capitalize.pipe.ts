import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {
  transform(value: string, args: any[]): string {

    value = value.toLowerCase();

    let values: string[] = value.split(' ');
    let result: string = "";

    for (let v in values) {
      result += values[v][0].toUpperCase() + values[v].substr(1) + " ";
    }

    return result;
  }
}
