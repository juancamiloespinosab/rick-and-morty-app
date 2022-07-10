import { createAction, props } from '@ngrx/store';

import { Location } from '@models/locations/Location';
import { ListState } from '@app/models/ListState';

export const getLocations = createAction(
  '[Locations] Get All Locations'
);

export const setLocations = createAction(
  '[Locations] Locations Loaded Success',
  props<ListState<Location>>()
);
