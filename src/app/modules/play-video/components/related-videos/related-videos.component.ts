import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-related-videos',
  templateUrl: './related-videos.component.html',
  styleUrls: ['./related-videos.component.scss']
})
export class RelatedVideosComponent implements OnInit {

  constructor() { }

  @Input() relatedVideo: any = [];

  // @Output() closePopUp = new EventEmitter<boolean>();
 
  isTripleDotClicked:boolean = false;

  ngOnInit(): void {
    console.log(this.relatedVideo);
  }

  onTrippleDotClick(){
    this.isTripleDotClicked = !this.isTripleDotClicked;
  }
  onhoverTrippleDot(){
    this.isTripleDotClicked = true
  }
  onLeaveTrippleDot(){
    this.isTripleDotClicked = false
  }
  closePopup(){
    this.isTripleDotClicked = false
    console.log("clicked....")
  }

}
