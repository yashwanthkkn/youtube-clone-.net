import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-nav',
  templateUrl: './extended-nav.component.html',
  styleUrls: ['./extended-nav.component.scss']
})
export class ExtendedNavComponent implements OnInit {

  constructor() { }

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
