import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';
import { YoutubeService } from 'src/app/services/youtube.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:OauthService,private api: YoutubeService) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn()
      .then((res)=>{
        console.log(res);      
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  getVids(){
    this.api.getRandomVideos();
  }

}
