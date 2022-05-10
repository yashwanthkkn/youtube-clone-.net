import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import {YoutubeService} from "../../services/youtube.service"
import { NgForm } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { HistoryService } from 'src/app/services/history.service';
@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  loader:boolean = false;

  constructor(private ytube : YoutubeService,
    private router: Router, private route: ActivatedRoute,
    public oauth: OauthService, private subsService: SubscriptionService, private history: HistoryService) { }
  array:number[] = [1,2,3,4,5,6,7,8,9,10]

  toggleDescription:boolean=false;

  videoId :any;
  comments :any[] = []
  userId : any;
  historyLog:any;

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
        let videos = await this.ytube.getSingleVideo(this.videoId);
        if(videos.length !== 0){
          this.video.id = videos[0].id;
          this.video.channelTitle = videos[0].snippet.channelTitle;
          this.video.channelId = videos[0].snippet.channelId;
          this.video.title = videos[0].snippet.title;
          this.video.description =videos[0].snippet.description;
          this.video.thumbnailsUrl = videos[0].snippet.thumbnails.default.url;
          this.video.publishedAt = videos[0].snippet.publishedAt;
          this.video.likeCount = videos[0].statistics.likeCount;
          this.video.viewCount = videos[0].statistics.viewCount;
          this.video.commentCount = videos[0].statistics.commentCount;
          this.video.duration = videos[0].contentDetails.duration;
          this.video.iframeUrl = "https://www.youtube.com/embed/"+this.video.id;
          if(sessionStorage.getItem('user')){
            this.userId = sessionStorage.getItem('user');            
            this.userId = JSON.parse(this.userId).id;            
          }
          else{
            this.userId = "";            
          }
        } 
        else{
          return
          // this.router.navigate(['/']);
        }
        this.history.logHistory(this.videoId,this.userId)        

        let relatedVideos = await this.ytube.getRelatedVideo(this.videoId, 15);
        this.relatedVideos = relatedVideos;
      })();

      // fetching comments
      (async()=>{
        this.comments = await this.ytube.getComments(this.videoId,20)        
      })();
    });
  }

  async subscribe(){
    await this.subsService.addSubscriptions(this.video.channelId);
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
