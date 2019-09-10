import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {

    if(this.description == undefined){
      this.router.navigateByUrl('portfolio');
    }
  }

  ngOnInit() {

  }
}
