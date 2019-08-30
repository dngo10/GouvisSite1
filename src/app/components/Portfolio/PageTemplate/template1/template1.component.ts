import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.css']
})
export class Template1Component implements OnInit {

  @Input() project: string;
  @Input() type: string;
  @Input() description: string;
  @Input() services: string;
  @Input() location: string;
  @Input() imagelink: Array<string>;

  constructor() { }



  ngOnInit() {
    console.log("hello");
  }

}
