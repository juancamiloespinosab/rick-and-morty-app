import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from '@app/components/components.module';

import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainComponent,
  },
];

@NgModule({
  declarations: [PagesComponent, MainComponent, NotFoundComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forRoot(routes)],
  providers: [],
})
export class PagesModule {}
