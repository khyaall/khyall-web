import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SubNavBarComponent } from './sub-nav-bar/sub-nav-bar.component';
import { PrimeNgModule } from '../DesignModules/prime-ng.module';
import { SubFooterComponent } from './sub-footer/sub-footer.component';



@NgModule({
  declarations: [
    SubNavBarComponent,
    SubFooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PrimeNgModule
  ],
  exports: [
    SubNavBarComponent,
    SubFooterComponent
  ]
})
export class WidgetsModule { }
