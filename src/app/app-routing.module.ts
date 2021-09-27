import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./Pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'about-us',
    loadChildren: ()=> import('./Pages/about-company/about-company.module').then(m => m.AboutCompanyModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
