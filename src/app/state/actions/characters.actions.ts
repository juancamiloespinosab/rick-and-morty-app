import { createAction, props } from '@ngrx/store';

import { QueryParams } from '@app/models/query/QueryParams';
import { CharactersResponse, CharactersResponseError } from '@app/models/characters/CharactersResponse';

export enum CharactersActionTypes {
  getCharacters = '[Characters] Get All Characters',
  setCharacters = '[Characters] Characters Loaded Success',
  errorCharacters = '[Characters] Characters Load Error',
}

export const getCharacters = createAction(
  CharactersActionTypes.getCharacters,
  props<QueryParams>()
);

export const setCharacters = createAction(
  CharactersActionTypes.setCharacters,
  props<CharactersResponse>()
);

export const errorCharacters = createAction(
  CharactersActionTypes.errorCharacters,
  props<CharactersResponseError>()
);
