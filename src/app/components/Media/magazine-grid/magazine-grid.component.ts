import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef, ViewChild } from '@angular/core';
import * as magazinejson from '../../../../assets/Jsons/Magazines/BuilderAndDeveloper.json';


@Component({
  selector: 'app-magazine-grid',
  templateUrl: './magazine-grid.component.html',
  styleUrls: ['./magazine-grid.component.css'],
})
export class MagazineGridComponent implements OnInit {

  magazineDict : Map<string,string>;
  thumbNailPath: string;
  items: QueryList<magazineInfo>;

  constructor(private cdRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.magazineDict = new Map<string,string>();

    magazinejson["default"]["data"].forEach(element => {
      if(element["key"] != "ilink" && element["key"] != "comment"){
        this.magazineDict.set(element["key"], element["value"]);
      } else if(element["key"] == "ilink"){
        this.thumbNailPath = element["value"];
      }
    });

    this.items = new QueryList<magazineInfo>();

    let i : number = 0;
    this.magazineDict.forEach((value: string, key: string) => {
      //console.log(this.magazines);
      let  magInfo = new magazineInfo(value, key, value + this.thumbNailPath);
      this.items.reset([...this.items.toArray(), magInfo]);
      i++;
    });
    //this.cdRef.detectChanges();
  }

  
  //@ViewChildren(MagazineElementComponent) magazines : QueryList<MagazineElementComponent>;
  //@ViewChild(MagazineElementComponent, {static:false}) m1 : MagazineElementComponent;

  ngAfterViewInit(): void {
    
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  
    
  }

}

class magazineInfo{
  link: string;
  title: string;
  imagePath: string;

  constructor(link: string, title: string, imagePath: string) {
    this.link = link;
    this.title = title;
    this.imagePath = imagePath;
  }
}

