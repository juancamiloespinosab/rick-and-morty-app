import { Character } from '@app/models/characters/Character';
import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/state/ListState';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/character-detail.actions';

export const initialState: Character = {
  name: '',
  image: '',
  id: 1,
  status: '-',
  species: '-',
  characterType: '',
  gender: '-',
  origin: {
    name: '-',
    url: '',
  },
  location: {
    name: '-',
    url: '',
  },
  episode: [],
  url: '',
  created: new Date(),
};

export const characterDetailReducer = createReducer(
  initialState,
  on(actions.setCharacterDetail, (state, payload) => payload),
  on(actions.clearCharacterDetail, (state) => initialState)
);
