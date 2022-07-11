import { createAction, props } from '@ngrx/store';

import { QueryParams } from '@app/models/query/QueryParams';
import { CharactersResponse } from '@app/models/characters/CharactersResponse';
import { ResponseError } from '@app/models/ResponseError';
import { Character } from '@app/models/characters/Character';

export enum CharacterDetailActionTypes {
  getCharacterDetail = '[Character Detail] Get Character Detail',
  setCharacterDetail = '[Character Detail] Character Detail Loaded Success',
  errorCharacterDetail = '[Character Detail] Character Detail Load Error',
  clearCharacterDetail = '[Character Detail] Clear Character Detail',
}

export const getCharacterDetail = createAction(
  CharacterDetailActionTypes.getCharacterDetail,
  props<{ id: number }>()
);

export const setCharacterDetail = createAction(
  CharacterDetailActionTypes.setCharacterDetail,
  props<Character>()
);

export const errorCharacterDetail = createAction(
  CharacterDetailActionTypes.errorCharacterDetail,
  props<ResponseError>()
);

export const clearCharacterDetail = createAction(
  CharacterDetailActionTypes.clearCharacterDetail
);
