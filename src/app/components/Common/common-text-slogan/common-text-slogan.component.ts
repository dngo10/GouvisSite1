import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-text-slogan',
  templateUrl: './common-text-slogan.component.html',
  styleUrls: ['./common-text-slogan.component.css']
})



export class CommonTextSloganComponent implements OnInit {
  isIEOrEdge:boolean

 
  @Input() title : string
  @Input() content: string

  constructor() {
    this.isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
  }

  ngOnInit() {
  }

}
