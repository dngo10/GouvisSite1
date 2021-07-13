import { Component, OnInit } from '@angular/core';
import { default as portfolioData} from '../../../../assets/Jsons/PorfolioImages/portfolio.json';

@Component({
  selector: 'app-portfolio-mixed-use',
  templateUrl: './portfolio-mixed-use.component.html',
  styleUrls: ['./portfolio-mixed-use.component.css']
})
export class PortfolioMixedUseComponent implements OnInit {

  items: Array<ele>;
  type: string;

  constructor() {
    this.items = new Array<ele>();
    this.type = "mixed-use";
  }


  ngOnInit() {
    let i = 0;
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
