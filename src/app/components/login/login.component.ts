import { Component, OnInit } from '@angular/core';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:OauthService) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn()
      .then(()=>{
        // navigate to home
        // console.log(res);      
      })
      .catch((err:any)=>{
        // show err msg
        console.log(err);
        
      })
  }


}
