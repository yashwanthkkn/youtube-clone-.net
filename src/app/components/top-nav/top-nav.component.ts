import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public authService:OauthService) { }

  @Output() extentNavEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  extend(){
    this.extentNavEvent.emit('extend');
  }

}
