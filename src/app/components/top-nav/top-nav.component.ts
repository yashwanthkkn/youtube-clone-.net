import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor() { }

  @Output() extentNavEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  extend(){
    this.extentNavEvent.emit('extend');
  }

}
