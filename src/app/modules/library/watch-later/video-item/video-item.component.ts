import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-history-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class WatchLaterVideoItemComponent implements OnInit {

  @Input() video: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

}
