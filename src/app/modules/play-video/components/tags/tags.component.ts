import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  labelScrollWidth:any;
  labelWidth: any;

  ngOnInit(): void {
    let label = document.getElementById("scroll")
    console.log(label?.clientWidth)
    console.log(label?.scrollWidth)
    console.log(label?.clientWidth)
  }

}
