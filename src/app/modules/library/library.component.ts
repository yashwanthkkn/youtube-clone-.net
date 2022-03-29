import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  videos  = []

  isLoading: boolean = false;

  constructor(private api : YoutubeService, public authService: OauthService) {
    
   }
  history:number[]=[1,2,3,4,5,6,7]
  likedVideo:number[] =[1,2,3,4]
  playList:number[] =[1,2]
  watchLater:number[]=[1,2,3]

  libraryTop=[
    {
      icon:"fa fa-history",
      title:"History",
      link:"history"
    },
    {
      icon:"fas fa-clock",
      title:"Watch later",
      link:"history"
    },
    {
      icon:"far fa-photo-video",
      title:"Playlist",
      link:"history"
    },
    {
      icon:"fa fa-thumbs-up",
      title:"Liked video 5",
      link:"history"
    }
  ]



  ngOnInit(): void {
    this.isLoading = true;
    (async()=>{
      this.videos = await this.api.getVideos('firebase',8);  
      this.isLoading = false;
    })()
  }

}
