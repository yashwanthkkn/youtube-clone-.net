import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input() video: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

  getObjectLength(obj : any){
    return Object.keys(obj).length;
  }

}
