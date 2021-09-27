import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component';
import { PrimeNgModule } from '../DesignModules/prime-ng.module';



@NgModule({
  declarations: [
    SubNavBarComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PrimeNgModule
  ],
  exports: [
    SubNavBarComponent
  ]
})
export class WidgetsModule { }
