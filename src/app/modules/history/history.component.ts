import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import {YoutubeService} from "../../services/youtube.service"
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private ytube : YoutubeService, private history : HistoryService) { }
  video : any [] = [];
  userId : any;
  ngOnInit(): void {

    this.history.subject.subscribe(
      (data:any)=>{
        console.log(data);
        this.video = data;
      }
    )
    // get user id from session storage and convert to
    if(sessionStorage.getItem('user')){
      this.userId = sessionStorage.getItem('user');
      this.userId = JSON.parse(this.userId);
      this.history.getHistory(this.userId.id);
    }
    else{
      this.userId = "";
      this.history.getHistory(this.userId);
    }

    // (async()=>{
    //   let videos = await  this.ytube.getVideosForHistory("firebase",8);
    //   console.log(videos);
    //   // this.video=videos;
    // })()
  }

}
