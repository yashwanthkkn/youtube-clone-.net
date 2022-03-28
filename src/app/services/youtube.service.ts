import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OauthService } from './oauth.service';
declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  constructor(private authService : OauthService) {   }

  getRandomVideos(){
    let params = {
      part : 'snippet,contentDetails',
      mine : false,
      maxResults:'5',
      chart:'mostPopular',
      q:'random'
    }
    if(this.authService.isAuthenticated)
      params.mine = true;
    var request = gapi.client.request({
      'method': 'GET',
      // 'path': '/youtube/v3/subscriptions',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });

    request.execute((response:any)=> {
      console.log(response);
    });
  }
}
