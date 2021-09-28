import {Component, OnInit} from '@angular/core';
import {LangService} from 'src/app/Services/lang.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  language = ''

  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
    this.langService.getLang().subscribe(result => {
      this.language = result;
    })
  }

}
