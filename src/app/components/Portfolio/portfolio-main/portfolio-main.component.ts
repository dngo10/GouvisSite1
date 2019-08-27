import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent implements OnInit {

  showCommercial: boolean;
  showCustom : boolean;
  showMixedUse : boolean;
  showSingleFamily: boolean;
  showMultiFamily : boolean;
  itemclicked : string;

  constructor() {
    this.showCommercial = true;
    this.showCustom = true;
    this.showMixedUse = true;
    this.showSingleFamily = true;
    this.showMultiFamily = true;
  }

  allClick(itemclicked: string){
    if(itemclicked == "all"){
      this.showCommercial = true;
      this.showCustom = true;
      this.showMixedUse = true;
      this.showSingleFamily = true;
      this.showMultiFamily = true;      
    }

    if(itemclicked == "custom"){
      this.showCommercial = false;
      this.showCustom = true;
      this.showMixedUse = false;
      this.showSingleFamily = false;
      this.showMultiFamily = false;
    }

    if(itemclicked == "commercial"){
      this.showCommercial = true;
      this.showCustom = false;
      this.showMixedUse = false;
      this.showSingleFamily = false;
      this.showMultiFamily = false;
    }

    if(itemclicked == "mixeduse"){
      this.showCommercial = false;
      this.showCustom = false;
      this.showMixedUse = true;
      this.showSingleFamily = false;
      this.showMultiFamily = false;
    }

    if(itemclicked == "singlefamily"){
      this.showCommercial = false;
      this.showCustom = false;
      this.showMixedUse = false;
      this.showSingleFamily = true;
      this.showMultiFamily = false;
    }

    if(itemclicked == "multifamily"){
      this.showCommercial = false;
      this.showCustom = false;
      this.showMixedUse = false;
      this.showSingleFamily = false;
      this.showMultiFamily = true;
    } 
 
  }

  

  ngOnInit() {

  }



}