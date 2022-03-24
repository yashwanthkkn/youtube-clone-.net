import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }


  @Output() extentNavEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  extend(){
    this.extentNavEvent.emit('extend');
  }


}
