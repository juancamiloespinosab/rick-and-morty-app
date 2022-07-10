import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { charactersReducer } from './reducers/characters.reducer';
import { locationsReducer } from './reducers/locations.reducer';
import { CharactersEffects } from './effects/characters.effects';
import { LocationsEffects } from './effects/locations.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ 'characters': charactersReducer, 'locations': locationsReducer }),
    EffectsModule.forRoot([CharactersEffects, LocationsEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class StateModule {}
