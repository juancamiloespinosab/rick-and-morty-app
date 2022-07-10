import { createAction, props } from '@ngrx/store';

import { QueryParams } from '@models/query/QueryParams';
import { LocationsResponse } from '@models/locations/LocationsResponse';
import { ResponseError } from '@models/ResponseError';

export enum LocationsActionTypes {
  getLocations = '[Locations] Get All Locations',
  setLocations = '[Locations] Locations Loaded Success',
  errorLocations = '[Locations] Locations Load Error',
}

export const getLocations = createAction(
  LocationsActionTypes.getLocations,
  props<QueryParams>()
);

export const setLocations = createAction(
  LocationsActionTypes.setLocations,
  props<LocationsResponse>()
);

export const errorLocations = createAction(
  LocationsActionTypes.errorLocations,
  props<ResponseError>()
);
