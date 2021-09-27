import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrimeNgModule } from '../DesignModules/prime-ng.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PrimeNgModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class LayoutModule { }
