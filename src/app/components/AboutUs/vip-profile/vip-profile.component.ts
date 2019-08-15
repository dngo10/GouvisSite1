import { Component, OnInit } from '@angular/core';
import { VipSharedServiceComponent } from '../../Common/vip-shared-service/vip-shared-service.component';

@Component({
  selector: 'app-vip-profile',
  templateUrl: './vip-profile.component.html',
  styleUrls: ['./vip-profile.component.css']
})
export class VipProfileComponent implements OnInit {

  name: string;
  imageName: string;
  title: string;
  description: string;


  constructor(_vipSe : VipSharedServiceComponent) {
    this.name =  _vipSe.name;
    this.title = _vipSe.title;
    this.description = _vipSe.description;
    this.imageName = _vipSe.imageName;
  }

  ngOnInit() {
  }

}
