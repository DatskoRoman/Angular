import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';


@Pipe({
  name: 'stringType'
})
export class StringTypePipe implements PipeTransform {

  transform(value: User): string {
    return `${value.id}). ${value.name} - ${value.email}`;
  }
}
