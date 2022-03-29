import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  GoogleAuth:any = undefined; 
  isAuthenticated : boolean = false;
  
  constructor() { 
    this.loadClient();
  }

  loadClient(){
    return new Promise((resolve,reject)=>{
      gapi.load('client',()=>{
        let access_token = sessionStorage.getItem('accessToken')
        if(access_token !== null){
          this.isAuthenticated = true
          gapi.client.setToken({access_token})
        }      
        gapi.client.init({
          'apiKey': environment.GAPI_API_KEY,
          'clientId': environment.GAPI_CLIENT_ID,
          'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
        }).then(()=> {
            this.GoogleAuth = gapi.auth2.getAuthInstance(); 
            resolve('loaded')
        });
      })
    })
  }

  signIn(){
    return new Promise(async (resolve,reject)=>{
      try{
        const oAuthUser = await this.GoogleAuth.signIn();
        const authResponse = this.GoogleAuth.currentUser.get().getAuthResponse();
        sessionStorage.setItem('accessToken', authResponse.access_token);
        this.isAuthenticated = true;
        resolve(authResponse)
      }catch(err){
        this.isAuthenticated = false;
        reject(err);
      }
    })
  }

  signOut(){
    return new Promise((resolve,reject)=>{
      this.isAuthenticated = false;
      sessionStorage.removeItem('accessToken');
      resolve('done');
    })
  }
}
