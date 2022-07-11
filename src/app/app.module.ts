import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
