import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string | number, format: string = 'mediumDate', locale: string = 'en-US'): string {
    if (!value) return '';
    return formatDate(value, format, locale);
  }
}