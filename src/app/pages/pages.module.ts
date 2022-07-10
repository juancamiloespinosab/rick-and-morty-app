import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '@app/components/components.module';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent, MainComponent, NotFoundComponent],
  imports: [CommonModule, ComponentsModule, PagesRoutingModule],
  providers: [],
})
export class PagesModule {}
