import { Component, OnInit } from '@angular/core';
import { PortfolioSharedServiceComponent } from 'src/app/components/Common/portfolio-shared-service/portfolio-shared-service.component';

@Component({
  selector: 'app-data-block',
  templateUrl: './data-block.component.html',
  styleUrls: ['./data-block.component.css']
})
export class DataBlockComponent implements OnInit {

  type: string;
  location: string;
  imagelink: Array<string>;
  project: string;
  description: string;
  services: string;

  constructor(portfolioShared: PortfolioSharedServiceComponent) {
    this.type = portfolioShared.type;
    this.location = portfolioShared.location;
    this.description = portfolioShared.description;
    this.imagelink = portfolioShared.imagelink;
    this.project = portfolioShared.project;
    this.services = portfolioShared.services;
  }

  ngOnInit() {
    
  }

}
