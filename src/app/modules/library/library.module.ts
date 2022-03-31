import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { VideoItemComponent } from './liked-videos/video-item/video-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { WatchLaterVideoItemComponent } from './watch-later/video-item/video-item.component';


@NgModule({
  declarations: [
    LibraryComponent,
    LibraryCardComponent,
    LibraryHeaderComponent,
    LikedVideosComponent,
    VideoItemComponent,
    WatchLaterComponent,
    WatchLaterVideoItemComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    InfiniteScrollModule
  ]
})
export class LibraryModule { }
