import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  {
    path: 'likes',
    component: LikedVideosComponent
  },
  {
    path: 'watch-later',
    component: WatchLaterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
