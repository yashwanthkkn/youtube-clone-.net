import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {

  constructor() { }
  array:number[] = [1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
  }

}
