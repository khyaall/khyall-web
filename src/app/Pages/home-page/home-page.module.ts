import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { PrimeNgModule } from 'src/app/DesignModules/prime-ng.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    TranslateModule,
    CarouselModule,
    OwlModule,
    PrimeNgModule
  ]
})
export class HomePageModule { }
