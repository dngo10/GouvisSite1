import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-portfolio-shared-service',
  templateUrl: './portfolio-shared-service.component.html',
  styleUrls: ['./portfolio-shared-service.component.css']
})

@Injectable()
export class PortfolioSharedServiceComponent implements OnInit {

  type: string;
  location: string;
  imagelink: Array<string>;
  project: string;
  description: string;
  services: string;

  constructor() { }

  ngOnInit() {
  }

}
