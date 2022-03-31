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

  videoData: any = [];

  isLoading: boolean = false;
  
  nextPageToken: string = '';

  isInfiniteScroll: boolean = false;

  constructor(public authService: OauthService, private YtSerivce: YoutubeService) { }

  ngOnInit(): void {
    // document.body.scrollTop = 0;
    let likevid=document.getElementById('like-video')
    likevid?.scrollIntoView({behavior: 'smooth'})
    this.isLoading = true;
    (
      async () => {
        this.videoData = await this.YtSerivce.getPlaylists('LL', 8, '')
        this.nextPageToken = this.videoData.nextPageToken
        this.videos = this.videoData.items;
        this.isLoading = false;
      }
    )()
  }

  onScrollDown(e: any){
    if(this.nextPageToken)
      if(!this.isInfiniteScroll){
        this.isInfiniteScroll = true;
        setTimeout(()=>{
          (async()=>{
            this.videoData = await this.YtSerivce.getPlaylists('LL', 8, this.nextPageToken);
            this.videos.push(...this.videoData.items);
            this.nextPageToken = this.videoData.nextPageToken;
            this.isInfiniteScroll = false;
          })()
        },1000)
      }
      
  }

}
