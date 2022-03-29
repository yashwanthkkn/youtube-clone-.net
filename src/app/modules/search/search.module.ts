import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { PopupComponent } from './components/popup/popup.component';



@NgModule({
  declarations: [
    SearchComponent,
    SearchListComponent,
    PopupComponent,
    
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    
  ]
})
export class SearchModule { }
