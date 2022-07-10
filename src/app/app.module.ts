import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
