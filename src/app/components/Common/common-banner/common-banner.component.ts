import { Component, OnInit, Input, HostListener} from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-common-banner',
  templateUrl: './common-banner.component.html',
  styleUrls: ['./common-banner.component.css']
})
export class CommonBannerComponent implements OnInit {

  @Input() title: string;
  @Input() imagePath: string;

  constructor() {
  }
  

  ngOnInit() {
  }

  changeTitleandUrl(title: string, path: string){
    this.title = title;
    this.imagePath = path;
    //this.elementRef.nativeElement.style.setPromperty('--pictureBackgroundUrl', path);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
  event.target.innerWidth;
}

  

}
