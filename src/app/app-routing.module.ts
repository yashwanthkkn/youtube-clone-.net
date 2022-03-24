import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
  { path: 'history', loadChildren: () => import('./modules/history/history.module').then(m => m.HistoryModule) },
  { path: 'library', loadChildren: () => import('./modules/library/library.module').then(m => m.LibraryModule) },
  { path: 'playVideo', loadChildren: () => import('./modules/play-video/play-video.module').then(m => m.PlayVideoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
