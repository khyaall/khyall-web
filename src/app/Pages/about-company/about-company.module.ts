import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutCompanyComponent } from './about-company/about-company.component';


@NgModule({
  declarations: [
    AboutCompanyComponent
  ],
  imports: [
    CommonModule,
    AboutCompanyRoutingModule
  ],
  exports: [
    AboutCompanyComponent
  ]
})
export class AboutCompanyModule { }
