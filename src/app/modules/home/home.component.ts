import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isLabelLeftScrollable: boolean = false;
  isLabelRightScrollable: boolean = false;

  labelScrollWidth: any;
  labelWidth: any;

  constructor() { }

  ngOnInit(): void {
    let label = document.getElementById('label-scroll');
    this.labelScrollWidth = label?.scrollWidth;
    this.labelWidth = label?.clientWidth;
    console.log(this.labelScrollWidth, this.labelWidth);
    if(this.labelScrollWidth < this.labelWidth || this.labelWidth == this.labelScrollWidth ) {
      this.isLabelRightScrollable = false;
      this.isLabelLeftScrollable = false;
    }
    else if(this.labelScrollWidth > this.labelWidth) {
      this.isLabelRightScrollable = true;
    }
    label?.addEventListener('scroll', (e) => {
      if(label?.scrollLeft == 0) {
        this.isLabelLeftScrollable = false;
      }
      else {
        this.isLabelLeftScrollable = true;
      }
      if(this.labelWidth + label?.scrollLeft === this.labelScrollWidth || this.labelWidth + label?.scrollLeft + 1 > this.labelScrollWidth){
        console.log(this.labelWidth + label?.scrollLeft, this.labelScrollWidth , true);
        this.isLabelRightScrollable = false;
      }
      else {
        console.log(this.labelWidth + label?.scrollLeft, this.labelScrollWidth , false);
        this.isLabelRightScrollable = true;
      }
    });
  }

  scroll(direction: string){
    let label: any = document.getElementById('label-scroll');
    if(direction == 'right') {
      label.scrollLeft = label?.scrollLeft + 100;
    }
    else if(direction == 'left') {
      label.scrollLeft = label?.scrollLeft - 100;
    }
  }

}
