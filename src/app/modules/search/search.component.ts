import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  constructor() { }
  showDiv:boolean = false;
  ngOnInit(): void {
  }
  toggleDiv(){
    if(this.showDiv === true){
      this.showDiv = false;
    }
    else{
      this.showDiv = true;
    }
  }


}
