import { Injectable } from '@angular/core';
import { OauthService } from './oauth.service';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  constructor(private authService : OauthService) { }


  async getVideos(searchKey:string = 'random',maxResults:number = 10){
    console.log(searchKey);
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: never[] = [];
    let params = {
      part : 'snippet',
      mine : false,
      maxResults:maxResults,
      chart:'mostPopular',
      q:searchKey
    }

    if(this.authService.isAuthenticated)
      params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }
}
