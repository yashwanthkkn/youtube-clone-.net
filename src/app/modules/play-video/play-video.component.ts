import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../../services/youtube.service"
@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  loader:boolean = false;
  constructor(private ytube : YoutubeService) { }
  array:number[] = [1,2,3,4,5,6,7,8,9,10]

  video = {
    id:"",
    channelTitle:"",
    title:"",
    description:"",
    likeCount:"",
    viewCount:"",
    commentCount:"",
    duration:"",
    publishedAt:"",
    thumbnailsUrl:""
  }


  ngOnInit(): void {
    this.loader = true;
    (async()=>{
      // loading the cards
      // this.videos = await this.api.getVideos('firebase',1); 
      let videos = await  this.ytube.getSingleVideo("X2kjYdAJMIM");
      if(videos.length !== 0){
        this.video.id = videos[0].id;
        this.video.channelTitle = videos[0].snippet.channelTitle;
        this.video.title = videos[0].snippet.title;
        this.video.description =videos[0].snippet.description;
        this.video.thumbnailsUrl = videos[0].snippet.thumbnails.default.url;
        this.video.publishedAt = videos[0].snippet.publishedAt;
        this.video.likeCount = videos[0].statistics.likeCount;
        this.video.viewCount = videos[0].statistics.viewCount;
        this.video.commentCount = videos[0].statistics.commentCount;
        this.video.duration = videos[0].contentDetails.duration;
      } 
      console.log(this.video);
      
    })()
  }

}
