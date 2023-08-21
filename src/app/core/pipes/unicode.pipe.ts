import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicode'
})
export class UnicodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let text = value as string;
    return text?.replace(/\\u[\dA-F]{4}/gi,
      function (match) {
        return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
      });
  }
}
