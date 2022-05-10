import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';
import { UserService } from './user.service';
declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  GoogleAuth:any = undefined; 
  isAuthenticated : boolean = false;
  authUser:User ;
  constructor(private userService: UserService) { 
    this.authUser = {
      name:'',
      url:'',
      email:'',
      id:''
    }
    this.loadClient();
  }

  loadClient(){
    return new Promise((resolve,reject)=>{
      gapi.load('client',()=>{
        let access_token = sessionStorage.getItem('accessToken')
        let user = sessionStorage.getItem('user')
        if(access_token && user){

          this.isAuthenticated = true
          this.authUser = JSON.parse(user)
          gapi.client.setToken({access_token})
        }      
        gapi.client.init({
          apiKey: environment.GAPI_API_KEY,
          clientId: environment.GAPI_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
          fetch_basic_profile: true,
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
        let profile = this.GoogleAuth.currentUser.get().getBasicProfile();
        this.authUser.email = profile.getEmail()
        this.authUser.name =  profile.getName()
        this.authUser.url = profile.getImageUrl()
        
        this.userService.getUser(this.authUser)
          .subscribe(res=>{
            var usr:any = res;
            this.authUser.id = usr.userId;
            sessionStorage.setItem('user',JSON.stringify(this.authUser))
            this.isAuthenticated = true;
            resolve(authResponse)
          },
          err=>{
            console.log(err);
            this.isAuthenticated = false;
            reject(err);
          })
      }catch(err){
        this.isAuthenticated = false;
        reject(err);
      }
    })
  }

  signOut(){
    return new Promise((resolve,reject)=>{
      this.GoogleAuth.signOut();
      this.isAuthenticated = false;
      this.authUser = {
        name:'',
        url:'',
        email:'',
        id:''
      }
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('user');
      resolve('done');
    })
  }
}
