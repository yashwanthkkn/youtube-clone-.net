import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../../services/youtube.service"
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private ytube : YoutubeService) { }
  video : any [] = [];
  ngOnInit(): void {

    (async()=>{
      let videos = await  this.ytube.getVideosForHistory("firebase",8);
      this.video=videos;
      console.log(videos);
    })()
  }

}
