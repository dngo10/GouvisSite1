import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-sixty-years-pop-up',
  templateUrl: './sixty-years-pop-up.component.html',
  styleUrls: ['./sixty-years-pop-up.component.css']
})
export class SixtyYearsPopUpComponent implements OnInit {

  showPopUp:boolean = true;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  onClickClose(){
    this.showPopUp = false;
  }

}
