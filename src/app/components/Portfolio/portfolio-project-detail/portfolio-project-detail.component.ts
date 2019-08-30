import { Component, OnInit } from '@angular/core';
import { PortfolioSharedServiceComponent } from '../../Common/portfolio-shared-service/portfolio-shared-service.component';

@Component({
  selector: 'app-portfolio-project-detail',
  templateUrl: './portfolio-project-detail.component.html',
  styleUrls: ['./portfolio-project-detail.component.css']
})
export class PortfolioProjectDetailComponent implements OnInit {

  type: string;
  location: string;
  imagelink: Array<string>;
  project: string;
  description: string;
  services: string;

  imageNum: Number;
  router: any;

  constructor( _portfolioService: PortfolioSharedServiceComponent) {
    this.type =  _portfolioService.type;
    this.location =  _portfolioService.location;
    this.imagelink =  _portfolioService.imagelink;
    this.project =  _portfolioService.project;
    this.description =  _portfolioService.description;
    this.services =  _portfolioService.services;

    this.imageNum = this.imagelink.length;

    
  }

  ngOnInit() {

  }

}
