import { DOCUMENT } from '@angular/common';
import {Component, Inject, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {LangService} from 'src/app/Services/lang.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  language = '';
  i = 0;
  timer: any;
  elem:any;
  timer2: any;
  j=0;
  imgSrc = ['dfgdhgdgh.svg','dfgdhgdgh.svg','dfgdhgdgh.svg','dfgdhgdgh.svg'];
  backgroundStyle = "background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../../assets/Images/"+this.imgSrc[this.i]+"') no-repeat;background-size: cover; height: 780px;"
  constructor(
    private langService: LangService) {
  }

  ngOnInit(): void {
    this.langService.getLang().subscribe(result => {
      this.language = result;
    })
    this.play();
     //this.playDivs();
  }

  play(){
    this.timer = setInterval(() => {
      // clearInterval(this.timer)
      if (this.i > this.imgSrc.length) {
        this.i = 0;
      }
      this.backgroundStyle = "background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../../assets/Images/"+this.imgSrc[this.i]+"') no-repeat;background-size: cover; height: 780px;"
      ;
      this.i++
    }, 500);
    //clearTimeout(this.timer);
    // this.timer = setTimeout(this.play,900);
    // if(this.i > this.imgSrc.length){
    //   this.i = 0;
    // }
    // this.backgroundStyle = "background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../../../../assets/Images/"+this.imgSrc[this.i]+"') no-repeat;background-size: cover; height: 780px;"
    // this.i++;

  }
  // playDivs(){
  //   for(let i =0; i<document.getElementsByClassName('divY').length;i++){
  //     document.getElementsByClassName('divY')[i].setAttribute('style','background: #14306F;');
  //   }
  //   document.getElementsByClassName('divY')[this.j].setAttribute('style','background: #B69149;');
  //   this.j++;
  //   if(this.j === document.getElementsByClassName('divY').length){
  //     this.j= 0;
  //   }

  //   this.timer2 = setInterval(this.playDivs,1000);
  // }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

