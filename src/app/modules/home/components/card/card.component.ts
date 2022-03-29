import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  isLoading: boolean = true;
  @Input() cardData : any;

  id: string = '';
  constructor() {}

  ngOnInit(): void {
    if(typeof this.cardData.id == 'string'){
      this.id = this.cardData.id;
    }
    else if(typeof this.cardData.id == 'object'){
      this.id = this.cardData.id.videoId;
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
