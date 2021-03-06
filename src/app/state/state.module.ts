import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { charactersReducer } from './reducers/characters.reducer';
import { locationsReducer } from './reducers/locations.reducer';
import { CharactersEffects } from './effects/characters.effects';
import { LocationsEffects } from './effects/locations.effects';
import { EpisodesEffects } from './effects/episodes.effects';
import { episodesReducer } from './reducers/episodes.reducer';
import { characterDetailReducer } from './reducers/character-detail.reducer';
import { CharacterDetailEffects } from './effects/character-detail.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ 'characters': charactersReducer, 'locations': locationsReducer, 'episodes': episodesReducer, 'character-detail': characterDetailReducer }),
    EffectsModule.forRoot([CharactersEffects, LocationsEffects, EpisodesEffects, CharacterDetailEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class StateModule {}
