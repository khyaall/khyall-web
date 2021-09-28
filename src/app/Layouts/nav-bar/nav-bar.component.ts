import {Component, Inject, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from "@ngx-translate/core";
import {LangService} from "../../Services/lang.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  language: string | null = localStorage.getItem('khayalWebLang')
  elem:any;
  constructor(
    // @ts-ignore
    @Inject(DOCUMENT) private document,
    private translate: TranslateService,
    private langService: LangService
  ) {
  }

  ngOnInit(): void {
    this.onDetectLag(this.language);
    this.elem = document.documentElement;
  }

  onDetectLag(lang?: string | null): void {
    if (lang === 'ar') {
      this.document.body.setAttribute('dir', 'rtl');
      this.translate.use('ar');
      this.language = 'ar';
    } else {
      this.document.body.setAttribute('dir', 'ltr');
      this.translate.use('en');
      this.language = 'en';
    }
    localStorage.setItem('khayalWebLang', this.language);
    this.langService.setLang(this.language);
  }

}
