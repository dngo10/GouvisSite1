import { Component, OnInit, Input } from '@angular/core';
import { PortfolioSharedServiceComponent } from 'src/app/components/Common/portfolio-shared-service/portfolio-shared-service.component';

@Component({
  selector: 'app-data-block',
  templateUrl: './data-block.component.html',
  styleUrls: ['./data-block.component.css']
})
export class DataBlockComponent implements OnInit {

  @Input() type: string;
  @Input() location: string;
  @Input() imagelink: Array<string>;
  @Input() project: string;
  @Input() description: string;
  @Input() services: string;

  constructor() {
  }

  ngOnInit() {
    
  }

}
