import { Component, OnInit } from '@angular/core';
import {YoutubeService} from 'src/app/services/youtube.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isLabelLeftScrollable: boolean = false;
  isLabelRightScrollable: boolean = true;

  labelScrollWidth: any;
  labelWidth: any;
  
  isLoading: boolean = false;
  videos: any = [];

  isInfiniteScroll: boolean = false;

  categories: any;

  currentCategory: string = 'All';
  
  constructor(private api : YoutubeService) { 
    
  }


  ngOnInit(): void {

    this.isLoading = true;
  
    (async()=>{
      this.videos = await this.api.getVideos('firebase',8); 
      this.categories = await this.api.getVideoCategories();
      this.isLoading = false;
    })()

    setTimeout(()=>{
      this.labelScrollEvents();
    },1000)
  }

  scroll(direction: string){
    let label: any = document.getElementById('label-scroll');
    if(direction == 'right') {
      label.scrollLeft = label?.scrollLeft + 100;
    }
    else if(direction == 'left') {
      label.scrollLeft = label?.scrollLeft - 100;
    }
  }

  labelScrollEvents(){{
    let label: any = document.getElementById('label-scroll');
    this.labelScrollWidth = label?.scrollWidth;
    this.labelWidth = label?.clientWidth;
    if(this.labelScrollWidth < this.labelWidth || this.labelWidth == this.labelScrollWidth ) {
      this.isLabelRightScrollable = false;
      this.isLabelLeftScrollable = false;
    }
    else if(this.labelScrollWidth > this.labelWidth) {
      this.isLabelRightScrollable = true;
    }
    label?.addEventListener('wheel', (e: any) => {
      e.preventDefault();
      label.scrollLeft = label?.scrollLeft + e.deltaY;
    });
    label?.addEventListener('scroll', (e: any) => {
      this.labelScrollWidth = label?.scrollWidth;
      this.labelWidth = label?.clientWidth;
      if(label?.scrollLeft == 0) {
        this.isLabelLeftScrollable = false;
      }
      else {
        this.isLabelLeftScrollable = true;
      }
      if(this.labelWidth + label?.scrollLeft === this.labelScrollWidth || this.labelWidth + label?.scrollLeft + 1 > this.labelScrollWidth){
        this.isLabelRightScrollable = false;
      }
      else {        
        this.isLabelRightScrollable = true;
      }
    });
  }}

  selectCategory(category: string, id: any) {
    if(category != this.currentCategory) {
      this.isLoading = true;
      this.currentCategory = category;
      this.videos = [];
      (
        async()=>{
          (this.currentCategory == 'All') ? this.videos = await this.api.getVideos('firebase',8) : this.videos = await this.api.getVideoByCategory(category,8);
          this.isLoading = false;
        }
      )()
    }
  }

  onScrollDown(e: any){
    if(!this.isInfiniteScroll){
      this.isInfiniteScroll = true;
      setTimeout(()=>{
        (async()=>{
          (this.currentCategory == 'All') ? this.videos.push(...await this.api.getVideos('firebase',8)) : this.videos.push(...await this.api.getVideoByCategory(this.currentCategory,8))
          this.isInfiniteScroll = false;
        })()
      },1000)
    }
      
  }

}
