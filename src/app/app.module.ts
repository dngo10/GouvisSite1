import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/HomePage/banner/banner.component';
import { QuoteBlockComponent } from './components/quote-block/quote-block.component';
import { GridImagesComponent } from './components/HomePage/grid-images/grid-images.component';
import { HomePagePanel1Component } from './components/HomePage/home-page-panel1/home-page-panel1.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoHomePageComponent } from './components/header/logo-home-page.component';
import { FirstClassComponent } from './components/HomePage/first-class/first-class.component';
import { ServicesWordsComponent } from './components/HomePage/services-words/services-words.component';
import { CardsComponent } from './components/HomePage/cards/cards.component';
import { VideoIntroComponent } from './components/HomePage/video-intro/video-intro.component';
import { MainComponent } from './components/HomePage/main/main.component';
import { ServiceMainComponent } from './components/Services/service-main/service-main.component';
import { ServiceBannerComponent } from './components/Services/service-banner/service-banner.component';
import { ServiceEfficiencyComponent } from './components/Services/service-efficiency/service-efficiency.component';
import { SmepTitlesComponent } from './components/Services/smep-titles/smep-titles.component';
import { SeviceServicesComponent } from './components/Services/sevice-services/sevice-services.component';
import { CommonBannerComponent } from './components/Common/common-banner/common-banner.component';
import { MediaMainComponent } from './components/Media/media-main/media-main.component';
import { CommonTextSloganComponent } from './components/Common/common-text-slogan/common-text-slogan.component';
import { MagazineGridComponent } from './components/Media/magazine-grid/magazine-grid.component';
import { MagazineElementComponent } from './components/Media/magazine-element/magazine-element.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactMainComponent } from './components/Contact/contact-main/contact-main.component';
import { OfficeLocationComponent } from './components/Contact/office-location/office-location.component';
import { ContactGridImagesComponent } from './components/Contact/contact-grid-images/contact-grid-images.component';
import { AboutUsMainComponent } from './components/AboutUs/about-us-main/about-us-main.component';
import { AUGridImagesComponent } from './components/AboutUs/augrid-images/augrid-images.component';
import { AUImageComponent } from './components/AboutUs/auimage/auimage.component';
import { VipSharedServiceComponent } from './components/Common/vip-shared-service/vip-shared-service.component';
import { VipProfileComponent } from './components/AboutUs/vip-profile/vip-profile.component';
import { AUCultureGridImagesComponent } from './components/AboutUs/auculture-grid-images/auculture-grid-images.component';
import { AUPartiesGridImagesComponent } from './components/AboutUs/auparties-grid-images/auparties-grid-images.component';
import { PortfolioMainComponent } from './components/Portfolio/portfolio-main/portfolio-main.component';
import { PortfolioCommercialComponent } from './components/Portfolio/portfolio-commercial/portfolio-commercial.component';
import { PortfolioElementComponent } from './components/Portfolio/portfolio-element/portfolio-element.component';
import { Template1Component } from './components/Portfolio/PageTemplate/template1/template1.component';
import { Template2Component } from './components/Portfolio/PageTemplate/template2/template2.component';
import { Template3Component } from './components/Portfolio/PageTemplate/template3/template3.component';
import { Template4Component } from './components/Portfolio/PageTemplate/template4/template4.component';
import { DataBlockComponent } from './components/Portfolio/PageTemplate/data-block/data-block.component';
import { PortfolioSharedServiceComponent } from './components/Common/portfolio-shared-service/portfolio-shared-service.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuoteBlockComponent,
    GridImagesComponent,
    HomePagePanel1Component,
    FooterComponent,
    LogoHomePageComponent,
    FirstClassComponent,
    ServicesWordsComponent,
    CardsComponent,
    VideoIntroComponent,
    MainComponent,
    ServiceMainComponent,
    ServiceBannerComponent,
    ServiceEfficiencyComponent,
    SmepTitlesComponent,
    SeviceServicesComponent,
    CommonBannerComponent,
    MediaMainComponent,
    CommonTextSloganComponent,
    MagazineGridComponent,
    MagazineElementComponent,
    ContactMainComponent,
    OfficeLocationComponent,
    ContactGridImagesComponent,
    AboutUsMainComponent,
    AUGridImagesComponent,
    AUImageComponent,
    VipSharedServiceComponent,
    VipProfileComponent,
    AUCultureGridImagesComponent,
    AUPartiesGridImagesComponent,
    PortfolioMainComponent,
    PortfolioCommercialComponent,
    PortfolioElementComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    DataBlockComponent,
    PortfolioSharedServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    VipSharedServiceComponent,
    PortfolioSharedServiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
