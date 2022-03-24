import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.scss']
})
export class HistoryItemComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  formatViews(views: number) {
    if (views < 1e3) return views;
    if (views >= 1e3 && views < 1e6) return +(views / 1e3).toFixed(1) + "K";
    if (views >= 1e6 && views < 1e9) return +(views / 1e6).toFixed(1) + "M";
    if (views >= 1e9 && views < 1e12) return +(views / 1e9).toFixed(1) + "B";
    if (views >= 1e12) return +(views / 1e12).toFixed(1) + "T";
    return views;
  }

}
