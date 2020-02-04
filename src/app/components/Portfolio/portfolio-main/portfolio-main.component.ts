import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';


@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.css']
})
export class PortfolioMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;

  showCommercial: boolean;
  showCustom : boolean;
  showMixedUse : boolean;
  showSingleFamily: boolean;
  showMultiFamily : boolean;
  itemclicked : string;
  vidHeigth: string;
  vidWidth: string;

  constructor(private cdRef:ChangeDetectorRef) {
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

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.commonBanner.title= "PORTFOLIO";
    //this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/PortfolioBanner.jpg";
    this.vidWidth = "100%";
    this.vidHeigth = "";

    this.cdRef.detectChanges();
  }



}
