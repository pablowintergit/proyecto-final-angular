import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullNamePipe'
})
export class FullNamePipePipe implements PipeTransform {

  transform(person:any, ...args: unknown[]):string {
    if (!person || !person.name || !person.lastName) {
      return '';
    }

    return `${person.lastName}, ${person.name} `;
  }
}
