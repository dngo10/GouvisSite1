import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-intro',
  templateUrl: './video-intro.component.html',
  styleUrls: ['./video-intro.component.css']
})
export class VideoIntroComponent implements OnInit {

  width: number;
  height: number;
 

  constructor(private sanitizer:DomSanitizer) {
    
  }

  @Input() videoLink: string;
  @Input() videoPath: SafeResourceUrl ;

  ngOnInit() {
    this.onResize(null);
  }

  onResize(event) {
    this.width = window.innerWidth * 90 /100;
    this.height = this.width*9/16;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink + "?vq=hd1080");
  }

}
