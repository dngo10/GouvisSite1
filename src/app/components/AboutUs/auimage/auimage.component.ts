import { Component, OnInit, Input } from '@angular/core';
import { VipSharedServiceComponent } from '../../Common/vip-shared-service/vip-shared-service.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auimage',
  templateUrl: './auimage.component.html',
  styleUrls: ['./auimage.component.css']
})
export class AUImageComponent implements OnInit {

  @Input() imageName: string;
  @Input() name: string;
  @Input() title: string;
  @Input() description: Array<String>;
  constructor(private _vipService: VipSharedServiceComponent, private router: Router) {

  }

  ngOnInit() {
  }

  public open(){
    this._vipService.name = this.name;
    this._vipService.title = this.title;
    this._vipService.imageName = this.imageName;
    this._vipService.description = this.description;
    this.router.navigateByUrl('/person');
  }

}
