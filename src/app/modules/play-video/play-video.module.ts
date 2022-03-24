import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayVideoRoutingModule } from './play-video-routing.module';
import { PlayVideoComponent } from './play-video.component';


@NgModule({
  declarations: [
    PlayVideoComponent
  ],
  imports: [
    CommonModule,
    PlayVideoRoutingModule
  ]
})
export class PlayVideoModule { }
