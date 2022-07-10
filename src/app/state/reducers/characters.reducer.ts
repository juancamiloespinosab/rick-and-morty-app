import { state } from '@angular/animations';
import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/ListState';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/characters.actions';

export const initialState: ListState<Location> = {
  pagination: {
    page: 1,
    totalPages: 1,
  },
  items: [],
};

export const charactersReducer = createReducer(
  initialState,
  on(actions.setCharacters, (state, payload) => {
    console.log('charactersReducer', payload);
    
    return {
      pagination: {
        page: state.pagination.page + 1,
        totalPages: payload.info.pages,
      },
      items: payload.results,
    };
  })
);
