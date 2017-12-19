import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, status?: string): string {
    if(status == 'enable') {
      return value.replace(/./gi, '*');
    } else {
      return value;
    }
  }

}
