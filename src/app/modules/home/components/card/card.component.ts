import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isLoading: boolean = true;
  @Input() cardData : any;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
