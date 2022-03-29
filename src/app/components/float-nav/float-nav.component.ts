import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/services/oauth.service';

@Component({
  selector: 'app-float-nav',
  templateUrl: './float-nav.component.html',
  styleUrls: ['./float-nav.component.scss']
})
export class FloatNavComponent implements OnInit {

  constructor(public authService: OauthService, private router : Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.authService.signOut()
      .then(()=>{
        this.router.navigate(['/home'])
      })
  }

}
