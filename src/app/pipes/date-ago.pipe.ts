import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo'
})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
          return 'Just now';
      const intervals:number[] = [
          31536000,
          2592000,
          604800,
          86400,
          3600,
          60,
          1
      ]
      let counter;
      for(let i = 0 ; i < intervals.length ; i++){
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0){
          if (counter === 1) {
              // return counter + ' ' + i + 'hour ago'; 
              return counter + ' hour ago'; 
          } else {
              return counter + ' hours ago';
          }
        }
      }
    }
    return value;
  }

}
