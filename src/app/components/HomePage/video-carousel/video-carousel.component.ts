import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css'],
})
export class VideoCarouselComponent implements OnInit {
  slideIndex:number = 1;
  youtube: YouTubePlayer;

  @ViewChild('player') player: YouTubePlayer;
  @ViewChild('player1') player1: YouTubePlayer;

  constructor() {

  }


  showSlides(n: number):void{
    let i: number;
    let ele: ElementCSSInlineStyle;
    let slides = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length){this.slideIndex = 1}
    if(n < 1){this.slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

  plusSlides(n: number) {
    if(this.slideIndex == 1){
      this.player.pauseVideo();
      this.player1.playVideo();
    }else{
      this.player1.pauseVideo();
      this.player.playVideo();
    }
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    if(this.slideIndex == 1){
      this.player.pauseVideo();
      this.player1.playVideo();
    }else{
      this.player1.pauseVideo();
      this.player.playVideo();
    }
    this.showSlides(this.slideIndex = n);
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex);
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.onResize(undefined);
  }

  onReady(event:Event){

    this.player.pauseVideo();
    this.player1.pauseVideo();
  }

  onResize(event:Event){
    

    //if(window.innerWidth >= 1500){
    //  this.player.width = 1500;
    //} else if(window.innerWidth >= 720){
    //  this.player.width = 720;
    //}else{
      this.player.width = window.innerWidth * 80 /100;
    //}
    
    this.player.height = this.player.width*9/16; 
    this.player1.width = this.player.width;
    this.player1.height = this.player.height;
  }

}
