import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  videos = []
  searchString:any=''
  constructor(private route:ActivatedRoute,public ytService:YoutubeService) { }
  showDiv:boolean = false;
  ngOnInit(): void {
    this.searchString = this.route.snapshot.paramMap.get("query");
   
    (async()=>{
       this.videos = await this.ytService.searchVideos(this.searchString,10); 
    })()
    
  }
  toggleDiv(){
    if(this.showDiv === true){
      this.showDiv = false;
    }
    else{
      this.showDiv = true;
    }
  }


}
