import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-header',
  templateUrl: './library-header.component.html',
  styleUrls: ['./library-header.component.scss']
})
export class LibraryHeaderComponent implements OnInit {

  constructor() { }

  @Input() header={
    icon:"",
    title:"",
    link:""
  };
  ngOnInit(): void {
  }

}
