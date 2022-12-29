import { SidebarComponent } from './../sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './../header/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
