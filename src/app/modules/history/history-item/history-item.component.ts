import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {

  isLoading: boolean = true;

  constructor() { }

  @Input() video:any = {}

  video_dis = {
    thumbnail:"",
    title:"",
    description:"",
    channelName:"",
    viewCount:"",
    id:"",
    iframeurl:""
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    // console.log(this.video)
    this.video_dis.thumbnail = this.video.snippet.thumbnails.medium.url;
    this.video_dis.channelName = this.video.snippet.channelTitle;
    this.video_dis.title =this.video.snippet.title;
    this.video_dis.description = this.video.snippet.description;
    this.video_dis.id = this.video.id;
    this.video_dis.iframeurl = "https://www.youtube.com/embed/"+this.video.id;
    this.video_dis.viewCount = this.video.statistics.viewCount;
    console.log(this.video_dis)
  }

  formatViews(views: string) {
    const value:number = parseInt(views)
    if (value < 1e3) return views;
    if (value >= 1e3 && value < 1e6) return +(value / 1e3).toFixed(1) + "K";
    if (value >= 1e6 && value < 1e9) return +(value / 1e6).toFixed(1) + "M";
    if (value >= 1e9 && value < 1e12) return +(value / 1e9).toFixed(1) + "B";
    if (value >= 1e12) return +(value / 1e12).toFixed(1) + "T";
    return value;
  }

}
