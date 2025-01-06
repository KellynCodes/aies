import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    maxLength: number = 50,
    appendEnd: string = '...'
    ): string {
    if (!value || value.length <= maxLength) {
      return value;
    } else {
      return value.substring(0, maxLength) + appendEnd;
    }
  }
}
