import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylove',
  standalone: true
})
export class MylovePipe implements PipeTransform {

  transform(value: string): string {
    return `I love ${value} with all my heart❤️`;
  }
}