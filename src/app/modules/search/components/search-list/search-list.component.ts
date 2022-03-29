import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() cardData : any;
  searchString:string='';
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      
  }
  
  showMenu = false;
  // playVideo(videoId:string){
  //     this.router.navigate({["/playVideo/"+this.cardData[0].id.videoId]});
  // }
  toggleMenu(){
    if(this.showMenu==false){
      this.showMenu = true;
    }
    else{
      this.showMenu = false;
    }
  }
}
