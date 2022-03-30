import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import {YoutubeService} from "../../services/youtube.service"
@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  loader:boolean = false;

  constructor(private ytube : YoutubeService,private router: Router, private route: ActivatedRoute,private oauth: OauthService) { }
  array:number[] = [1,2,3,4,5,6,7,8,9,10]

  toggleDescription:boolean=false;

  videoId :any;
  comments :any[] = []
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
    thumbnailsUrl:"",
    iframeUrl:""
  }

  relatedVideos : any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.videoId = params.id;
      (async()=>{
        let videos = await  this.ytube.getSingleVideo(this.videoId);
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
          this.video.iframeUrl = "https://www.youtube.com/embed/"+this.video.id;
          
        } 
        else{
          return
          // this.router.navigate(['/']);
        }
        let relatedVideos = await this.ytube.getRelatedVideo(this.videoId, 15);
        this.relatedVideos = relatedVideos;
      })();

      // fetching comments
      (async()=>{
        this.comments = await this.ytube.getComments(this.videoId,20)
        console.log(this.comments);
        
      })();
    });
  }

  numberWithCommas(x :any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatCounts(views: any) {
    if (views < 1e3) return views;
    if (views >= 1e3 && views < 1e6) return +(views / 1e3).toFixed(1) + "K";
    if (views >= 1e6 && views < 1e9) return +(views / 1e6).toFixed(1) + "M";
    if (views >= 1e9 && views < 1e12) return +(views / 1e9).toFixed(1) + "B";
    if (views >= 1e12) return +(views / 1e12).toFixed(1) + "T";
    return views;
  }
  showAll(){
    this.toggleDescription = !this.toggleDescription;
    
  }

}
