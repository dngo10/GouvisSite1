import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-text-slogan',
  templateUrl: './common-text-slogan.component.html',
  styleUrls: ['./common-text-slogan.component.css']
})
export class CommonTextSloganComponent implements OnInit {
  @Input() title : string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
