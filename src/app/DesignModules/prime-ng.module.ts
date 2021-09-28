import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TreeModule} from 'primeng/tree';
import {TooltipModule} from 'primeng/tooltip';
import {FieldsetModule} from 'primeng/fieldset';
import {RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';

const primengModule = [
  CommonModule,
  ButtonModule,
  ToastModule,
  TableModule,
  InputTextModule,
  ScrollTopModule,
  SelectButtonModule,
  PanelModule,
  MenuModule,
  BreadcrumbModule,
  ContextMenuModule,
  TreeModule,
  TooltipModule,
  FieldsetModule,
  RippleModule,
  SidebarModule,
  TabViewModule,
  TabMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    primengModule
  ],
  exports: [
    primengModule
  ]
})
export class PrimeNgModule {
}
