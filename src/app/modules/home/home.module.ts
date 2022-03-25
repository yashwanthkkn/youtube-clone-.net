import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { HomePopupComponent } from './components/home-popup/home-popup.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    HomePopupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
