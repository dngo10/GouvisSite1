import { Component, OnInit, ViewChild, AfterContentInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';
import { ChildActivationEnd } from '@angular/router';


@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css'],
})
export class ServiceMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;
  constructor(private cdRef:ChangeDetectorRef) {}
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.commonBanner);
    this.commonBanner.title = "SERVICE";
    this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/ServiceBanner.jpg";
    this.cdRef.detectChanges();
  }
    
}
