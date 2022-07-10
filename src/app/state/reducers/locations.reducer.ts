import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/state/ListState';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/locations.actions';

export const initialState: ListState<Location> = {
  pagination: {
    page: 1,
    totalPages: 1,
  },
  items: [],
};

export const locationsReducer = createReducer(
  initialState,
  on(actions.setLocations, (state, payload) => {    
    return {
      pagination: {
        page: state.pagination.page + 1,
        totalPages: payload.info.pages,
      },
      items: payload.results,
    };
  })
);