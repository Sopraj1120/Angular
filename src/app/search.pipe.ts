import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    const searchText = args[0] ? args[0].toLowerCase() : '';

    if (!searchText) {
      return value;
    }

    return value.filter((a: any) =>
      a.title && a.title.toLowerCase().includes(searchText)
    );
  }
}
