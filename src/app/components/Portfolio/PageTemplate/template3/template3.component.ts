import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {

  @Input() project: string;
  @Input() type: string;
  @Input() description: string;
  @Input() services: string;
  @Input() location: string;
  @Input() imagelink: Array<string>;
  
  constructor() { }

  ngOnInit() {
  }

}
