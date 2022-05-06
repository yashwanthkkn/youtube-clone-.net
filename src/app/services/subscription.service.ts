import { Injectable } from '@angular/core';
import { OauthService } from './oauth.service';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subscriptions:any = []
  constructor(private authService : OauthService) { 
    (async () =>{
      // loading client if not exists
      if( ! gapi.client ){
        await this.authService.loadClient();
      }
      // if already authenticated fill the subscriptions
      if(authService.isAuthenticated){
        this.subscriptions = await this.getSubscriptions()
      }
      // clear subscriptions on logout and on login, fill them if not already been filled
      authService.GoogleAuth?.isSignedIn.listen(async (signIn:boolean)=>{
        if(!signIn){
          this.subscriptions = []
        }else if(this.subscriptions.length == 0){
          this.subscriptions = await this.getSubscriptions()
        }
      })
    })();
  }

  async getSubscriptions(){
    
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let subscriptions: any[] = [];
    let params = {
      part : 'snippet',
      mine : 'true',
    }

    if(!this.authService.isAuthenticated){
      return subscriptions
    }
    
    let response = await gapi.client.request({
      'method': 'GET',
      'path': '/youtube/v3/subscriptions',
      'params': params,
      
    });
    subscriptions = response.result.items
    return subscriptions
  }

  async addSubscriptions(channelId:string) {
    if( ! gapi.client ){
      await this.authService.loadClient();
    }
    let params = {
      part : 'snippet',
    }
    let body = {
      snippet:{
        resourceId:{
          channelId:channelId
        }
      }
    }

    if(!this.authService.isAuthenticated){
      return
    }
    
    let response = await gapi.client.request({
      'method': 'POST',
      'path': '/youtube/v3/subscriptions',
      'params': params,
      'body':body
    });
    // subscriptions = response.result.items
    this.subscriptions.unshift(response.result)
  }
}
