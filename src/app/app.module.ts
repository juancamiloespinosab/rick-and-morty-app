import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';


@NgModule({
  imports: [
    BrowserModule,
    PagesModule    
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
