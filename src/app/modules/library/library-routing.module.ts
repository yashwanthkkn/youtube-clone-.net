import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  {
    path: 'likes',
    component: LikedVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
