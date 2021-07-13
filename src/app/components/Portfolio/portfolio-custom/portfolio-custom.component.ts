import { Component, OnInit } from '@angular/core';
import {default as portfolioData} from '../../../../assets/Jsons/PorfolioImages/portfolio.json';

@Component({
  selector: 'app-portfolio-custom',
  templateUrl: './portfolio-custom.component.html',
  styleUrls: ['./portfolio-custom.component.css']
})
export class PortfolioCustomComponent implements OnInit {

  items: Array<ele>;
  type: string;

  constructor() {
    this.items = new Array<ele>();
    this.type = "custom";
  }


  ngOnInit() {
    //console.log(portfolioData.data);

    portfolioData.data.forEach(
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
    //console.log(this.items);
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
