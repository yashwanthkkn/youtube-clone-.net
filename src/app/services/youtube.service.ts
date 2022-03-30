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

  pageToken:string = '';


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
      pageToken:this.pageToken
    }

    if(this.authService.isAuthenticated)
      params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videos',
      'params': params,
      
    });
    this.pageToken = response.result.nextPageToken;
    videos = response.result.items
    return videos
  }

  async getVideosForHistory(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: never[] = [];
    let params = {
      part : 'snippet,contentDetails,statistics',
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
      id:searchKey
    }
    
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
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }

  async getVideoCategories(){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet',
      regionCode : 'IN',
    }

    // if(this.authService.isAuthenticated)
    //   params.mine = true;
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/videoCategories',
      'params': params,
      
    });
    
    videos = response.result.items
    return videos
  }


  async getVideoByCategory(searchKey:string = 'random',maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let videos: any[] = [];
    let params = {
      part : 'snippet',
      chart: 'mostPopular',
      maxResults:maxResults,
      q:searchKey,
      type: 'video',
      pageToken:this.pageToken
    }


    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/search',
      'params': params,
      
    });
    
    videos = response.result.items
    this.pageToken = response.result.nextPageToken;
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

  async getComments(videoId:string,maxResults:number = 10){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let comments: any[] = [];
    let params = {
      part : 'snippet,id',
      maxResults:maxResults,
      videoId:videoId
    }
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/commentThreads',
      'params': params,
      
    });
    
    comments = response.result.items
    return comments
  }

  async addComment(snippet:any){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let params = {
      part : 'snippet',
    }
    let response = await gapi.client.request({
      'method': 'POST',
      'path': '/youtube/v3/commentThreads',
      'params': params,
      'body':{
       snippet:snippet
      }
    });
    console.log(response);
    return response.result
  }
}

