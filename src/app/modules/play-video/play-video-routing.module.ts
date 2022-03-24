import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayVideoComponent } from './play-video.component';

const routes: Routes = [{ path: '', component: PlayVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayVideoRoutingModule { }
