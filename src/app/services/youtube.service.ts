import { Injectable } from '@angular/core';
import { OauthService } from './oauth.service';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  searchString:string = '';
  constructor(private authService : OauthService) { 
    
  }


  async getVideos(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: never[] = [];
    let params = {
      part : 'snippet',
      mine : false,
      maxResults:maxResults,
      chart:'mostPopular',
      q:searchKey,
    }

    if(this.authService.isAuthenticated)
      params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }


  async getSingleVideo(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet,contentDetails,statistics',
      // mine : false,
      // maxResults:maxResults,
      // chart:'mostPopular',
      // q:searchKey,
      id:searchKey
    }

    // if(this.authService.isAuthenticated)
    //   params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }


  async getRelatedVideo(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet',
      maxResults:maxResults,
      type: 'video',
      relatedToVideoId:searchKey
    }

    // if(this.authService.isAuthenticated)
    //   params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }





  async searchVideos(searchKey:string = 'random',maxResults:number = 10){
    
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

  getHistory(maxResults:number = 10){  
    return new Promise(async (resolve,reject)=>{
      try{
        if( ! gapi.client ){
          await this.authService.loadClient();
        }
        let videos: never[] = [];
        let params = {
          part : 'contentDetails,snippet',
          mine : false,
          // maxResults:maxResults,
        }
    
        if(this.authService.isAuthenticated)
          params.mine = true;
        
        let response = await gapi.client.request({
          'method': 'GET',
          'path': '/youtube/v3/channels',
          'params': params,
        });
        resolve(response)
      }catch(err){
        reject(err)
      }
    })
  }
}
