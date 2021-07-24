import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { WrapperComponent } from './wrapper/wrapper.component';
import { WallComponent } from './wrapper/wall/wall.component';
import { HeaderComponent } from './wrapper/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    WallComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
