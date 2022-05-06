import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-extended-nav',
  templateUrl: './extended-nav.component.html',
  styleUrls: ['./extended-nav.component.scss']
})
export class ExtendedNavComponent implements OnInit {

  constructor(public authService:OauthService, public subsService : SubscriptionService) { }

  subsList:any = []
  ngOnInit(): void {
  }

  withDraw(){
    let nav = document.getElementsByClassName('ext-nav-wrap')[0];
    nav?.classList.add('withdraw');
    nav?.classList.remove('extend');
  }

  extend(){
    let nav = document.getElementsByClassName('ext-nav-wrap')[0];
    nav?.classList.add('extend');
    nav?.classList.remove('withdraw');
  }
}
