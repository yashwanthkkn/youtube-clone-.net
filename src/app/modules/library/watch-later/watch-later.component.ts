import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss']
})
export class WatchLaterComponent implements OnInit {

  videos: any = [];

  isLoading: boolean = false;

  isInfiniteScroll: boolean = false;

  constructor(public authService: OauthService, private YtSerivce: YoutubeService) { }

  ngOnInit(): void {
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
