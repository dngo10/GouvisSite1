import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.css']
})
export class VideoSliderComponent implements OnInit, AfterViewInit {

  //This is for the show only. Always have 5 in there.
  videos:video_Info[] = [
    new video_Info(0, "C1IBWmo8RgM", undefined),
    new video_Info(1, "3tfjH1OaUgs", undefined),
    new video_Info(2, "esUfXNKH6kw", undefined),
  ];

  wrapperWith: number;
  wrapperMove: number;
  vw100: number;
  vw80: number;
  numberOfDot: number[];

  currentIndex: number;

  video_width: number;
  video_height:number;
  padding_left: number;

  @ViewChildren('player') youtubeVideos !: QueryList<YouTubePlayer>;

  constructor() {
    this.currentIndex = Math.floor(this.videos.length/2);
  }

  ngOnInit(): void {
    this.vw100 = window.innerWidth;
    this.vw80 = this.vw100/100*80;

    this.video_width = this.vw100/2;
    this.video_height = this.video_width/16*9;
    if(this.video_height > window.innerHeight){
      this.video_height = window.innerHeight;
      this.video_width = this.video_height/9*16;
    }

  }

  ngAfterViewInit():  void {
    this.youtubeVideos.forEach((item,index) =>{
      this.videos[index].video = item;
    });
    this.numberOfDot = Array<number>(this.videos.length);
    

    this.setUpWidth();
  }

  setUpWidth(): void{


    this.wrapperWith = (this.video_width + this.vw100/100)*(this.videos.length+1);

    for(let i = 0; i < this.videos.length; i++){

      if(this.videos[i].video){
        this.videos[i].video.width = this.video_width;
        this.videos[i].video.height = this.video_height;
      }
    }

    this.wrapperMove = this.getStep(this.video_width);
    this.padding_left = this.video_width/2 + this.vw100/100;
    //this.wrapperMove = 0;
  }

  wrapperStyle(){
    const styles = {'width': `${this.wrapperWith}px`,
                    'right': `${this.wrapperMove}px`,
                    'padding-left' : `${this.padding_left}px`,
    };
    return styles;
  }

  dotStyle(i: number){
    if(i == 0){
    const styles = {'background-color': 'red'}
    return styles;
    }
    
  }

  getStep(width: number){
    let position: number = this.get_presentation_point(this.videos.length);
    
    let initPosition = (width + this.vw100/100)*(position) + width/2 + 6000;
    let requiredPosition = this.vw80/2;
    return initPosition - requiredPosition;
  }

  CursorClick(num: number): void{
    this.wrapperMove += num*(this.vw100/100 + this.videos[0].video.width);
    let currentIndexClone = this.currentIndex;
    currentIndexClone += num;
    if(currentIndexClone == -1){
      this.currentIndex = this.videos.length-1;
    }else if(currentIndexClone == this.videos.length){
      this.currentIndex = 0;
    }else{
      this.currentIndex = currentIndexClone;
    }
    //this.rotateTheCarousel(this.currentIndex);

    let temp: video_Info = this.videos.pop();
    this.videos.unshift(temp);
  }

  private MoveAndPopPush():void{

  }

  //THIS IS TO MANIPULATE THE CAROUSEL

  //num: amount of item in the carousel.
  //in this case: VideoArrayShow
  private get_presentation_point(num: number){
    return Math.round(num/2);
  }

  private getVideoArrayLength(): number{
    let num: number = 5;
    if(num < this.videos.length + 2 ){
      num = this.videos.length + 2;
    }
    return num;
  }

  //rotateTheCarousel(video_current_index: number){
  //  let index_point: number = this.get_presentation_point(this.videoArrayShow.length);
  //  let point_number = video_current_index;
//
  //  for(let i: number = index_point; i > -1; i--){
  //    this.videoArrayShow[i] = this.videos[point_number];
  //    point_number--;
  //    if(point_number == -1){
  //      point_number = this.videos.length-1;
  //    }
  //  }
//
  //  //reset point_number;
  //  point_number = video_current_index;
//
  //  for(let i: number = index_point; i < this.videoArrayShow.length; i++){
  //    this.videoArrayShow[i] = this.videos[point_number];
  //    point_number++;
  //    if(point_number == this.videos.length){
  //      point_number = 0;
  //    }
  //  }
//
  //}



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
