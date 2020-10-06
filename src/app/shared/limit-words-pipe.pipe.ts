import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWordsPipe'
})
export class LimitWordsPipePipe implements PipeTransform {

  transform(value: string, limit: number ): string {
    const stringArray = value.split(' ');
    const reduced = stringArray.slice(0, limit);
    const returned = reduced.join(' ');
    return returned;
  }
}
