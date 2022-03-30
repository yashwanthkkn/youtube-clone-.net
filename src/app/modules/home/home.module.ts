import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { HomePopupComponent } from './components/home-popup/home-popup.component';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    HomePopupComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
