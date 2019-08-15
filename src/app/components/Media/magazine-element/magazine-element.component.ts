import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-magazine-element',
  templateUrl: './magazine-element.component.html',
  styleUrls: ['./magazine-element.component.css']
})
export class MagazineElementComponent implements OnInit {
  @Input() imagePath : string;
  @Input() link: string;
  @Input() title: string;
  constructor() { }
  ngOnInit() {
    
   //this.imagePath = "https://penpubinc.com/magazine/online/2017/BD/Jan/files/assets/cover/1.jpg";
  }

}
