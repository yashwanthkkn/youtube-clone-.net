import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';
import { YoutubeService } from 'src/app/services/youtube.service';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public authService:OauthService,public ytService:YoutubeService,private router:Router) { }

  @Output() extentNavEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  extend(){
    this.extentNavEvent.emit('extend');
  }
  search(searchQuery:string){
    this.router.navigate(
      [`/search/${searchQuery}`],
      // { queryParams: { query: searchQuery } }
    );
  }

}
