import { Component, OnInit, Injectable} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
    if(this.description == undefined){
      this.router.navigateByUrl('about-us');
    }

  }

  ngOnInit() {
  }

}
