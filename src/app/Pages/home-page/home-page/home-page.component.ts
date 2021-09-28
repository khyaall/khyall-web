import {Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {LangService} from 'src/app/Services/lang.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  language = ''
  Images = ['../../../../assets/Images/ثيبسل.png', '../../../../assets/Images/ثيبسل.png', '../../../../assets/Images/ثيبسل.png'];

  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
    this.langService.getLang().subscribe(result => {
      this.language = result;
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
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

