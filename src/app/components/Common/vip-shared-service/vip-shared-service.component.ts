import { Component, OnInit, Injectable, Inject } from '@angular/core';

@Component({
  selector: 'app-vip-shared-service',
  templateUrl: './vip-shared-service.component.html',
  styleUrls: ['./vip-shared-service.component.css']
})

@Injectable()
export class VipSharedServiceComponent implements OnInit {

  name: string;
  title: string;
  imageName: string;
  description: string;

  constructor() { }

  ngOnInit() {
  }

}
