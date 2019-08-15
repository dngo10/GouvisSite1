import { Component, OnInit, QueryList } from '@angular/core';
import * as vipJson from '../../../../assets/Jsons/CompanyVIPS/vip.json';


@Component({
  selector: 'app-augrid-images',
  templateUrl: './augrid-images.component.html',
  styleUrls: ['./augrid-images.component.css']
})
export class AUGridImagesComponent implements OnInit {

  items: QueryList<vipInfo>;

  constructor() {
    this.items = new QueryList<vipInfo>();
  }

  ngOnInit() {
    console.log(vipJson["default"]["data"]);
    vipJson["default"]["data"].forEach(element => {
      let vInfo = new vipInfo(element["name"], element["title"], element["imageName"], element["description"]);
      this.items.reset([...this.items.toArray(), vInfo]);
    });
  }

}

class vipInfo{
  name: string;
  title: string;
  imageName: string;
  description: string;

  constructor(name: string, title: string, imageName: string, description: string) {
    this.name = name;
    this.title = title;
    this.imageName = imageName;
    this.description = description;
  }
}
