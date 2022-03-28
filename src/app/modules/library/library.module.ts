import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { LibraryCardComponent } from './library-card/library-card.component';
import { LibraryHeaderComponent } from './library-header/library-header.component';


@NgModule({
  declarations: [
    LibraryComponent,
    LibraryCardComponent,
    LibraryHeaderComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
