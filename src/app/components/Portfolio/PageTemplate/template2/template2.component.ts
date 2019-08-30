import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {

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
