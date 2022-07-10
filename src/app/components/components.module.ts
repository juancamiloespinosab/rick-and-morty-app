import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HeaderComponent } from './bones/header/header.component';
import { ParallaxComponent } from './organisms/parallax/parallax.component';
import { PageParallaxBgComponent } from './templates/page-parallax-bg/page-parallax-bg.component';
import { DisplayContentComponent } from './bones/display-content/display-content.component';
import { CharacterDetailComponent } from './organisms/character-detail/character-detail.component';
import { MenuComponent } from './molecules/menu/menu.component';
import { SearchComponent } from './molecules/search/search.component';
import { CardComponent } from './molecules/card/card.component';
import { ButtonComponent } from './atoms/button/button.component';
import { IconButtonComponent } from './atoms/icon-button/icon-button.component';
import { InputComponent } from './atoms/input/input.component';
import { ImageComponent } from './atoms/image/image.component';
import { StateModule } from '@app/state/state.module';
import { CardListComponent } from './organisms/card-list/card-list.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ParallaxComponent,
    PageParallaxBgComponent,
    HeaderComponent,
    DisplayContentComponent,
    CharacterDetailComponent,
    MenuComponent,
    SearchComponent,
    CardComponent,
    ButtonComponent,
    IconButtonComponent,
    InputComponent,
    ImageComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    StateModule,
    InfiniteScrollModule,
    RouterModule
  ],
  exports: [
    ParallaxComponent,
    PageParallaxBgComponent,
    HeaderComponent,
    DisplayContentComponent,
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
