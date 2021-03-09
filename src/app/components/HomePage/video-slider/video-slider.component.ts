import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit, AfterViewInit {

  videos:video_Info[] = [
    new video_Info(2, "esUfXNKH6kw", undefined),
    new video_Info(0, "C1IBWmo8RgM", undefined),
    new video_Info(1, "3tfjH1OaUgs", undefined),
    new video_Info(2, "esUfXNKH6kw", undefined),
    new video_Info(0, "C1IBWmo8RgM", undefined),
  ];

  wrapperWith: number;
  wrapperMove: number;
  vw100: number;
  vw80: number;
  numberOfDot: number[];

  currentIndex: number;

  @ViewChildren('player') youtubeVideos !: QueryList<YouTubePlayer>;

  constructor() { }

  ngOnInit(): void {
    this.numberOfDot = Array<number>(this.videos.length - 2);
  }

  ngAfterViewInit():  void {
    this.youtubeVideos.forEach((item,index) =>{
      this.videos[index].video = item;
    });

    this.setUpWidth();
  }

  setUpWidth(): void{
    this.vw100 = window.innerWidth;
    this.vw80 = this.vw100/100*80;
    let width: number;
    let height: number;

    width = this.vw100/2;
    height = width/16*9;
    if(height > window.innerHeight){
      height = window.innerHeight;
      width = height/9*16;
    }

    this.wrapperWith = (width + this.vw100/100)*this.videos.length;

    for(let i = 0; i < this.videos.length; i++){
      this.videos[i].video.width = width;
      this.videos[i].video.height = height;
    }

    this.wrapperMove = this.getStep(width) + 2*(width + this.vw100/100);
  }

  wrapperStyle(){
    const styles = {'width': `${this.wrapperWith}px`,
                    'right': `${this.wrapperMove}px`,
    };
    return styles;
  }

  CursorClick(){}

  getStep(width: number){
    let initPosition = this.vw100/10 + width*1.5 + this.vw100/100;
    let requiredPosition = window.innerWidth/2;
    return initPosition - requiredPosition;
  }

}


class video_Info{
  id: number;
  video: YouTubePlayer;
  videoId: string;
  /**
   *
   */
  constructor(id: number, videoId: string, video: YouTubePlayer) {
    this.id = id;
    this.videoId = videoId;
    this.video = video;
  }
}
