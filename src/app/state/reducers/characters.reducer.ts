import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/state/ListState';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/characters.actions';

export const initialState: ListState<Location> = {
  pagination: {
    page: 1,
    totalPages: 1,
  },
  items: [],
  query: {
    name: ''
  }
};

export const charactersReducer = createReducer(
  initialState,
  on(actions.getCharacters, (state, payload) => {    
    return {
      pagination: {
        page: +payload['page'] ?? state.pagination.page,
        totalPages: state.pagination.totalPages
      },
      items: state.items,
      query: {
        name: payload['name']
      }
    };
  }),
  on(actions.setCharacters, (state, payload) => {    
    return {
      pagination: {
        page: state.pagination.page + 1,
        totalPages: payload.info.pages,
      },
      items: payload.results,
      query: {
        name: state.query['name']
      }
    };
  }),
  on(actions.clearCharacters, (state) => initialState)
);
