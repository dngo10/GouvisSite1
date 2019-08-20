import { Component, OnInit } from '@angular/core';
import * as commercial from '../../../../assets/Jsons/PorfolioImages/portfolio.json';
import { PortfolioSharedServiceComponent } from '../../Common/portfolio-shared-service/portfolio-shared-service.component.js';


@Component({
  selector: 'app-portfolio-commercial',
  templateUrl: './portfolio-commercial.component.html',
  styleUrls: ['./portfolio-commercial.component.css']
})
export class PortfolioCommercialComponent implements OnInit {

  items: Array<ele>;
  type: string;

  constructor() {
    this.items = new Array<ele>();
    this.type = "commercial";
  }


  ngOnInit() {
    let i = 0;
    commercial.data.forEach(
      element =>{  
        if(this.type == element["type"]){
          let item= new ele();
          item.description = element["description"]
          item.location = element["location"]
          item.project = element["project"]
          item.services = element["services"]
          item.type = element["type"]
          item.imagelink = element["imagelink"]
          this.items.push(item);
        }
      }
    );
    console.log(this.items);
  }
}

class ele{
  location: string;
  description: string;
  project: string;
  imagelink: Array<String>;
  services: string;
  type: string;
  className : string;
}
