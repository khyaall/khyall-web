import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
import { WidgetsModule } from './Widgets/widgets.module';
import { LayoutModule } from './Layouts/layout.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import 
// {AngularFontAwesomeModule}
//  from 'angular-font-awesome';
// import { OwlModule } from 'ngx-owl-carousel';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule,
    LayoutModule,
    WidgetsModule,
    CarouselModule,
    // AngularFontAwesomeModule
    // OwlModule
  ],
  providers: [Document],
  bootstrap: [AppComponent]
})
export class AppModule { }
