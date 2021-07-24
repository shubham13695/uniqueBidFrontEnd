import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home/home.component";
import { PageRouting } from './page-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PageRouting
  ]
})
export class PagesModule { }
