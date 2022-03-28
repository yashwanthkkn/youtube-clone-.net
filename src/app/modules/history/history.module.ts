import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { HistoryFilterComponent } from './history-filter/history-filter.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryItemComponent,
    HistoryFilterComponent,
    MenuDropdownComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
