import { Component, OnInit, Input } from '@angular/core';
import { PortfolioSharedServiceComponent } from '../../Common/portfolio-shared-service/portfolio-shared-service.component';

@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.css']
})
export class PortfolioElementComponent implements OnInit {

  constructor(private _portfolioService: PortfolioSharedServiceComponent) { }

  @Input() project: string;
  @Input() type: string;
  @Input() description: string;
  @Input() services: string;
  @Input() location: string;
  @Input() imagelink: Array<string>;


  ngOnInit() {

  }

  openProjectPage(){
    this._portfolioService.project = this.project;
    this._portfolioService.location = this.location;
    this._portfolioService.description = this.description;
    this._portfolioService.type = this.type;
    this._portfolioService.imagelink = this.imagelink;
    this._portfolioService.services = this.services;
    
    console.log(this.imagelink[0]);
  }

}
