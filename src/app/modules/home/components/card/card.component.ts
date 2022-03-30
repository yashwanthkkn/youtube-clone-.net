import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData : any;

  id: string = '';
  constructor() {}

  ngOnInit(): void {
    if(this.cardData!==undefined){
      if(typeof this.cardData.id == 'string'){
        this.id = this.cardData.id;
      }
      else if(typeof this.cardData.id == 'object'){
        this.id = this.cardData.id.videoId;
      }
    }
  }

}
