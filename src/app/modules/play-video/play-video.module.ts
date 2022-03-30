import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayVideoRoutingModule } from './play-video-routing.module';
import { PlayVideoComponent } from './play-video.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RelatedVideosComponent } from './components/related-videos/related-videos.component';
import { PopupComponent } from './components/popup/popup.component';
import { TagsComponent } from './components/tags/tags.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayVideoComponent,
    CommentsComponent,
    RelatedVideosComponent,
    PopupComponent,
    TagsComponent,
    SafePipe
  ],
  imports: [
    FormsModule,
    CommonModule,
    PlayVideoRoutingModule
  ]
})
export class PlayVideoModule { }
