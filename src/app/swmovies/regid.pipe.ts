import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regid'
})
export class RegidPipe implements PipeTransform {

  transform(value: string): unknown {
      let regex = new RegExp(/([^\/]+)\/?$/gm, 'g');

      return value ? value.match(regex) : '';
  }

}
