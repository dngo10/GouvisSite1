import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';
import { CommonTextSloganComponent } from '../../Common/common-text-slogan/common-text-slogan.component';
import { element } from 'protractor';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.css']
})
export class ContactMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;
  @ViewChild(CommonTextSloganComponent, {static: false}) commonTextSloganS: CommonTextSloganComponent;

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.indeedfunction("script", "indeed-apply-js");
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.commonBanner.title = "CONTACT";
    this.commonBanner.imagePath = "assets/Medias/Images/BannerImages/ContactBanner.jpg";

    this.commonTextSloganS.title = "CAREERS";
    this.commonTextSloganS.content = "Throughout the years, we have worked hard to create a healthy work environment that encourages teamwork, open lines of communication and collaboration. Gouvis Engineering believes that by empowering our employees to succeed, they take personal ownership in their role and are inspired to work more efficiently and effectively.";

    this.cdRef.detectChanges();
  }

  indeedfunction(s: string, id: string){
    let js: Element, iajs: Element = document.getElementsByTagName(s)[0];
    if(document.getElementById(id))
     return;
    js = document.createElement(s);
    js.id = id;
    (js as HTMLImageElement).src = "https://apply.indeed.com/indeedapply/static/scripts/app/bootstrap.js";
    iajs.parentNode.insertBefore(js, iajs);
  }

  initMap(){

  }

}
