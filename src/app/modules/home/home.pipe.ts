import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'home'
})
export class HomePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string, ...args: unknown[]): unknown {
    let sanitized = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    return sanitized
  }

}
