import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayVideoComponent } from './play-video.component';

const routes: Routes = [
  { path:'',redirectTo:'/home', pathMatch:'full'},
  { path: ':id', component: PlayVideoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayVideoRoutingModule { }
