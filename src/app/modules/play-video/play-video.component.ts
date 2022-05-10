import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import {YoutubeService} from "../../services/youtube.service"
import { NgForm } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  loader:boolean = false;

  constructor(private ytube : YoutubeService,
              private router: Router, 
              private route: ActivatedRoute,
              public oauth: OauthService, 
              private subsService: SubscriptionService , 
              private videoService : VideosService) { }
  array:number[] = [1,2,3,4,5,6,7,8,9,10]

  toggleDescription:boolean=false;

  videoId :any;
  comments :any[] = []

  commentSnippet = {
    textOriginal:'',
    parentId:''
  }
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
    iframeUrl:"",
    channelId:""
  }

  relatedVideos : any[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.videoId = params.id;
      (async()=>{
        let videos:any;
         this.videoService.getVideoById(this.videoId).subscribe(
          (data: any) => {
           videos = data

           console.log(videos);
           if(videos !==  null){
             this.video.id = videos.videoId;
             this.video.channelTitle = videos.title;
             this.video.channelId = videos.user;
             this.video.title = videos.title;
            //  this.video.description =videos.description;
             this.video.thumbnailsUrl = videos.imageUrl;
             this.video.publishedAt = "23/11/2022"
             this.video.likeCount = videos.likes;
             this.video.viewCount = videos.views;
             this.video.commentCount = "23.5k";
             this.video.duration = "11.50";
             this.video.iframeUrl = "https://www.youtube.com/embed/"+this.video.id;
             
           } 
           // else{
           //   return
           //   // this.router.navigate(['/']);
           // }






          }
        )
       
        // let relatedVideos = await this.ytube.getRelatedVideo(this.videoId, 15);
        // this.relatedVideos = relatedVideos;
      })();

      // fetching comments
      (async()=>{
        // this.comments = await this.ytube.getComments(this.videoId,20)        
      })();
    });
  }

  async subscribe(){
    // await this.subsService.addSubscriptions(this.video.channelId);
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

  async onSubmit(snippet:any){
    let form = snippet.value;
    let snip = {
        videoId:this.videoId,
        channelId : this.video.channelId,
        topLevelComment:{
          snippet:{
            textOriginal:form.comment
          }
        }
    } 
    try{
      let comment = await this.ytube.addComment(snip)
      this.comments.unshift(comment)
    }catch(err){
      console.log(err);
    }
  }

}
