import { Component, ViewChild } from '@angular/core';
import { ExtendedNavComponent } from './components/extended-nav/extended-nav.component';
import { NavigationStart, Router } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hasVideoView = false;

  @ViewChild(ExtendedNavComponent,{static:true}) extNav : ExtendedNavComponent | undefined;
  @ViewChild(SideNavComponent,{static:true}) sideNav : SideNavComponent | undefined;

  constructor(private router:Router){

    // hide side bar when play video module is rendered
    router.events.subscribe(event=>{
      if(event instanceof NavigationStart && event.url === '/playVideo'){
        this.hasVideoView = true;
        this.sideNav?.hideNav();
      }else if(event instanceof NavigationStart && event.url !== '/playVideo'){
        this.hasVideoView = false;
        this.sideNav?.showNav(); 
      }
    })
  }


  extend(){
    this.extNav?.extend();
  }
}
