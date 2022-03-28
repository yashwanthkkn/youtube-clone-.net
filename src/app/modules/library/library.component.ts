import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor(private route : ActivatedRoute) {
    this.route.queryParams.subscribe(data => {
      console.log(data)
    })
   }
  history:number[]=[1,2,3,4,5,6,7]
  likedVideo:number[] =[1,2,3,4]
  playList:number[] =[1,2]
  watchLater:number[]=[1,2,3]

  libraryTop=[
    {
      icon:"fa fa-history",
      title:"History",
      link:"history"
    },
    {
      icon:"fa fa-clock-o",
      title:"Watch later",
      link:"history"
    },
    {
      icon:"fa fa-youtube-play",
      title:"Playlist",
      link:"history"
    },
    {
      icon:"fa fa-thumbs-o-up",
      title:"Liked video 5",
      link:"history"
    }
  ]



  ngOnInit(): void {
    
  }

}
