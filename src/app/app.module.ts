import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FloatNavComponent } from './components/float-nav/float-nav.component';
import { LoginComponent } from './components/login/login.component';
import { ExtendedNavComponent } from './components/extended-nav/extended-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    FloatNavComponent,
    LoginComponent,
    ExtendedNavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
