import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-videos',
  templateUrl: './related-videos.component.html',
  styleUrls: ['./related-videos.component.scss']
})
export class RelatedVideosComponent implements OnInit {

  constructor() { }

  isTripleDotClicked:boolean = false;

  ngOnInit(): void {
  }

  onTrippleDotClick(){
    this.isTripleDotClicked = !this.isTripleDotClicked;
  }

}
