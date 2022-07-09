import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './bones/header/header.component';
import { ParallaxComponent } from './organisms/parallax/parallax.component';
import { PageParallaxBgComponent } from './templates/page-parallax-bg/page-parallax-bg.component';
import { DisplayContentComponent } from './bones/display-content/display-content.component';
import { CharactersComponent } from './organisms/characters/characters.component';
import { LocationsComponent } from './organisms/locations/locations.component';
import { EpisodesComponent } from './organisms/episodes/episodes.component';
import { CharacterDetailComponent } from './organisms/character-detail/character-detail.component';
import { MenuComponent } from './molecules/menu/menu.component';
import { SearchComponent } from './molecules/search/search.component';
import { CardComponent } from './molecules/card/card.component';
import { ButtonComponent } from './atoms/button/button.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';
import { InputComponent } from './atoms/input/input.component';
import { ImageComponent } from './atoms/image/image.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [
    ParallaxComponent,
    PageParallaxBgComponent,
    HeaderComponent,
    DisplayContentComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CharacterDetailComponent,
    MenuComponent,
    SearchComponent,
    CardComponent,
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    ImageComponent,
  ],
  imports: [CommonModule],
  exports: [
    ParallaxComponent,
    PageParallaxBgComponent,
    HeaderComponent,
    DisplayContentComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    CharacterDetailComponent,
    MenuComponent,
    SearchComponent,
    CardComponent,
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    ImageComponent,
  ],
  providers: [],
})
export class ComponentsModule { }
