import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from '@app/components/components.module';
import { CharactersComponent } from '@app/components/organisms/characters/characters.component';
import { EpisodesComponent } from '@app/components/organisms/episodes/episodes.component';
import { LocationsComponent } from '@app/components/organisms/locations/locations.component';

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
