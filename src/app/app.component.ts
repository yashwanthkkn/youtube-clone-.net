import { Component, ViewChild } from '@angular/core';
import { ExtendedNavComponent } from './components/extended-nav/extended-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild(ExtendedNavComponent,{static:true}) extNav : ExtendedNavComponent | undefined;

  extend(){
    this.extNav?.extend();
  }
}
