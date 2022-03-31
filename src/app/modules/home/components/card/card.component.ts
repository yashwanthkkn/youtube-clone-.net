import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData : any;

  id: string = '';
  iframeURL:string =''
  constructor() {}
  showIframe:boolean = false
  expandCard:boolean = false;
  expand(){
    this.showIframe = true
    console.log('Hover');
    
    setTimeout(()=>{
      if(this.showIframe){
        // still hovering - add that class
        // console.log('Still in ..so display');
        this.expandCard = true
      }else{
        this.expandCard = false
      }
    },2000)
  }

  withdraw(){
    // console.log('Withdrew');
    this.expandCard = false
    this.showIframe = false
  }

  ngOnInit(): void {
    if(this.cardData!==undefined){
      if(typeof this.cardData.id == 'string'){
        this.id = this.cardData.id;
        this.iframeURL ="https://www.youtube.com/embed/"+this.id

      }
      else if(typeof this.cardData.id == 'object'){
        this.id = this.cardData.id.videoId;
        this.iframeURL ="https://www.youtube.com/embed/"+this.id

      }
    }
  }

}
