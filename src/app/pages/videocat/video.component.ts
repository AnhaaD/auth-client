import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Declara a lib do videojs como externa ao angular
declare let videojs: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoCatComponent implements AfterViewInit {

  // Instancia do video.js.
  vidObj: any;
  // Poster para ser usado no video.js
  poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  // URL do video a ser reproduzido.
  video = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  video1 = 'https://www.youtube.com/watch?v=RGbueOMOEZ8';
  // Acessa o elemento video do html5 via viewchild.
  @ViewChild('myvid') vid: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    const options = {
      controls: true,
      autoplay: false,
      preload: 'auto',
      techOrder: ['html5']
    };

    this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
      videojs.log('Your player is ready!');
    });
  }

}
