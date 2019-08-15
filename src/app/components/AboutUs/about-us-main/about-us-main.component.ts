import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { CommonBannerComponent } from '../../Common/common-banner/common-banner.component';
import { CommonTextSloganComponent } from '../../Common/common-text-slogan/common-text-slogan.component';

@Component({
  selector: 'app-about-us-main',
  templateUrl: './about-us-main.component.html',
  styleUrls: ['./about-us-main.component.css']
})
export class AboutUsMainComponent implements OnInit {

  @ViewChild(CommonBannerComponent, {static: false}) commonBanner: CommonBannerComponent;
  @ViewChildren(CommonTextSloganComponent) slogans: QueryList<CommonTextSloganComponent>; 

  arr : sloganClass[] = [
    {
      title:"MANAGEMENT TEAM",
      content:"Our legacy and beliefs are united by a common goal: to produce the highest quality of design services to our clients. We feel privileged to provide services that collectively create the communities we live in."
    },
    {
      title: "COMPANY CULTURE",
      content: "Our shared interests and team building activities help us develop relationships that strengthen our bonds and create a space where trust and teamwork are at the pulse of our office culture." 
    },
    {
      title: "ANNUAL COMPANY EVENTS",
      content: "Our annual events are designed to create a space where family, friends and colleagues can come together in an inclusive environment. Our traditions and annual activities are an important component of our company's legacy." 
    } 
  ];

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.commonBanner.title = "ABOUT US";
    this.commonBanner.imagePath = "/assets/Medias/Images/BannerImages/AboutUsBanner.jpg";
    
    let i : number = 0;

    this.slogans.forEach(element => {
      
      element.title = this.arr[i].title;
      element.content =  this.arr[i].content;
      i = i + 1;
    });
    
    this.cdRef.detectChanges();
  }
}

class sloganClass {
  public title: string;
  public content: string;

  constructor(title: string, content: string){
    this.title = title;
    this.content = content;
  }
}
