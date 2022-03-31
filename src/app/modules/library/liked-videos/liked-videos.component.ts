import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-liked-videos',
  templateUrl: './liked-videos.component.html',
  styleUrls: ['./liked-videos.component.scss']
})
export class LikedVideosComponent implements OnInit {

  videos: any = [];

  isLoading: boolean = false;

  isInfiniteScroll: boolean = false;

  constructor(public authService: OauthService, private YtSerivce: YoutubeService) { }

  ngOnInit(): void {
    // document.body.scrollTop = 0;
    let likevid=document.getElementById('like-video')
    likevid?.scrollIntoView({behavior: 'smooth'})
    this.isLoading = true;
    (
      async () => {
        this.videos = await this.YtSerivce.getVideos('firebase', 8)
        this.isLoading = false;
      }
    )()
  }

  onScrollDown(e: any){
    if(!this.isInfiniteScroll){
      this.isInfiniteScroll = true;
      setTimeout(()=>{
        (async()=>{
          this.videos.push(...await this.YtSerivce.getVideos('firebase',8));
          this.isInfiniteScroll = false;
        })()
      },1000)
    }
      
  }

}
