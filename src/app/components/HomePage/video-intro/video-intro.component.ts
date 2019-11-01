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

  @Input() videoLink: string ="https://www.youtube.com/embed/hbET2TKiaEI?vq=hd1080";
  @Input() videoPath: SafeResourceUrl ;

  ngOnInit() {
    this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink + "?vq=hd1080");
    this.onResize(null);
  }

  onResize(event) {
    if(window.innerWidth >= 1280){
      this.width = 1280;
    } else if(window.innerWidth >= 720){
      this.width = 720;
    }else{
      this.width = window.innerWidth * 80 /100;
    }
    
    this.height = this.width*9/16;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.videoPath = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink + "?vq=hd1080");
  }

}
