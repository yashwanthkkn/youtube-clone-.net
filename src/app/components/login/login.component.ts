import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:OauthService, private router : Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn()
      .then(()=>{
        // navigate to home
        this.router.navigate(['/home'])
      })
      .catch((err:any)=>{
        // show err msg
        console.log(err);
      })
  }


}
