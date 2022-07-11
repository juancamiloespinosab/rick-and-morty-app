import { createAction, props } from '@ngrx/store';

import { QueryParams } from '@models/query/QueryParams';
import { ResponseError } from '@models/ResponseError';
import { EpisodesResponse } from '@app/models/episodes/EpisodesResponse';

export enum EpisodesActionTypes {
  getEpisodes = '[Episodes] Get All Episodes',
  setEpisodes = '[Episodes] Episodes Loaded Success',
  errorEpisodes = '[Episodes] Episodes Load Error',
  clearEpisodes = '[Episodes] Clear Episodes',
}

export const getEpisodes = createAction(
  EpisodesActionTypes.getEpisodes,
  props<QueryParams>()
);

export const setEpisodes = createAction(
  EpisodesActionTypes.setEpisodes,
  props<EpisodesResponse>()
);

export const errorEpisodes = createAction(
  EpisodesActionTypes.errorEpisodes,
  props<ResponseError>()
);

export const clearEpisodes = createAction(
  EpisodesActionTypes.clearEpisodes
);
