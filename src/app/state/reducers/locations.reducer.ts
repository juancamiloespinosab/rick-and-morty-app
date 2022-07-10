import { createReducer, on } from '@ngrx/store';

import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/ListState';
import * as actions from '@state/actions/locations.actions';

export const initialState: ListState<Location> = {
    pagination: {
        page: 1,
        totalPages: 2
    },
    items: []
};

export const locationsReducer = createReducer(
    initialState,
    on(actions.setLocations, (state, payload) => payload)
  );


