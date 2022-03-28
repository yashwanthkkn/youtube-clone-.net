import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showMenu = false;

  toggleMenu(){
    if(this.showMenu==false){
      this.showMenu = true;
    }
    else{
      this.showMenu = false;
    }
  }
}
