import { AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-slider',
  templateUrl: 'video-slider.component.html',
  styleUrls: ['video-slider.component.css']
})
export class VideoSliderComponent implements OnInit, AfterViewInit, AfterContentInit {

  //This is for the show only. Always have 5 in there.
  videos:video_Info[] = [
    //OLD ONES
    //new video_Info(0, "3tfjH1OaUgs", undefined),
    //new video_Info(1, "C1IBWmo8RgM", undefined),
    //new video_Info(2, "esUfXNKH6kw", undefined),

    new video_Info(0, "nn0tB513arA", undefined),
    new video_Info(1, "kruJH4n7kz4", undefined),
    new video_Info(3, "NaRwyhmwzKY", undefined),
    new video_Info(4, "p_Z8AUylojA", undefined),
    new video_Info(5, "s6Lcz4-uWqc", undefined),
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
  video_wrapper_initPosition: number;
  reset_move: number;
  duration_second: number;
  current_dot: number;

  @ViewChildren(YouTubePlayer) youtubeVideos : QueryList<YouTubePlayer>;

  constructor() {
    this.currentIndex = this.get_presentation_point();
    this.duration_second = 1;
  }
  ngAfterContentInit(): void {

  }

  ngOnInit(): void {

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    this.onResize(null);
  }

  ngAfterViewInit():  void {
    
    this.youtubeVideos.forEach((item,index) =>{
      this.videos[index].video = item;
      console.log("item " + item);
    });
    this.numberOfDot = Array<number>(this.videos.length);

    this.setUpWidth();
  }

  setUpWidth(): void{

    for(let i = 0; i < this.videos.length; i++){

      if(this.videos[i].video){
        this.videos[i].video.width = this.video_width;
        this.videos[i].video.height = this.video_height;
      }
    }

    //this.wrapperMove = 0;
  }

  wrapperStyle(){
    const styles = {'width': `${this.wrapperWith}px`,
                    'right': `${this.wrapperMove}px`,
                    'padding-left' : `${this.padding_left}px`,
                    'transition-property': `right`,
                    'transition-duration': `${this.duration_second}s`,
                    'transition-timing-function': `cubic-bezier`,
                    };

    return styles;
  }

  dotStyle(i: number){
    let temp: number =  this.videos[this.currentIndex].id;
    if(i == temp){
    const styles = {'background-color': '#dcedc1'}
    return styles;
    }
    
  }

  private initPosition(){

    let position: number = this.currentIndex;
    
    let initPosition = (this.video_width + this.vw100/100)*(position) + this.video_width/2 + this.padding_left;
    initPosition += this.video_width + this.vw100/100;
    let requiredPosition = this.vw80/2;
    return initPosition - requiredPosition;
  }

  rearDiv(){
    const style={
      'display': 'inline-block',
      'margin-right': '1vw',
      'width': `${this.video_width - this.vw100/100}px`,
      'height': `${this.video_height}px`,
      'background-color': `#b1c147`,
    }

    return style;
  }

  CursorClick(direction: number): void{

    for(let i = 0; i < this.videos.length; i++){
      this.videos[i].video.pauseVideo();
    }

    let currentIndexClone: number = this.currentIndex;
    currentIndexClone += direction;

    if(currentIndexClone == -1){
      currentIndexClone = this.videos.length-1;
      if(direction < 0)
        this.duration_second = 1;
      else{
        this.duration_second = 1;
      }
    }

    else if(currentIndexClone == this.videos.length){
      currentIndexClone = 0;
      if(direction > 0){
        this.duration_second = 1;
      }else{
        this.duration_second = 1;
      }
      
    }else{
      this.duration_second = 1;
    }
    this.currentIndex = currentIndexClone;
    this.wrapperMove = this.video_wrapper_initPosition + (this.currentIndex - this.get_presentation_point())*(this.video_width + this.vw100/100);   
  }

  dotClicked(i: number){
    let c_dot : number = this.videos[this.currentIndex].id;
    this.CursorClick(i-c_dot);
  }

  //THIS IS TO MANIPULATE THE CAROUSEL

  //num: amount of item in the carousel.
  //in this case: VideoArrayShow
  private get_presentation_point(){

    return Math.floor(this.videos.length/2);
  }

  private getVideoArrayLength(): number{
    let num: number = 5;
    if(num < this.videos.length + 2 ){
      num = this.videos.length + 2;
    }
    return num;
  }

  public onResize(event: Event){
    this.vw100 = window.innerWidth;
    this.vw100 = window.innerWidth;
    this.vw80 = this.vw100/100*80;

    this.video_width = this.vw100/1.8;
    this.video_height = this.video_width/16*9;
    if(this.video_height > window.innerHeight){
      this.video_height = window.innerHeight;
      this.video_width = this.video_height/9*16;
    }

    this.wrapperWith = (this.video_width + this.vw100/100)*(this.videos.length+4);
    //this.padding_left = this.video_width/2 + this.vw100/100;
    this.padding_left = 0;
    this.video_wrapper_initPosition = this.initPosition();
    this.wrapperMove = this.video_wrapper_initPosition;
    this.currentIndex = this.get_presentation_point();
    this.current_dot = this.videos[this.currentIndex].id;   

    for(let i = 0; i < this.videos.length; i++){
      if(this.videos[i].video){
        this.videos[i].video.pauseVideo();
      }
    }
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
