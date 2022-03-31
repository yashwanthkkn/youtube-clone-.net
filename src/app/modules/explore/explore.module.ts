import { NgModule } from '@angular/core';
import { ExploreComponent } from './explore.component';
import { RouterModule, Routes } from '@angular/router';
import { ExploreListComponent } from './components/explore-list/explore-list.component';
import { ExplorePopListComponent } from './components/explore-pop-list/explore-pop-list.component';


const routes: Routes = [{ path: '', component: ExploreComponent }];

@NgModule({
  
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
  
      ExploreListComponent,
      ExploreComponent,
      ExplorePopListComponent
    ]
    
  
})
export class ExploreModule { }
