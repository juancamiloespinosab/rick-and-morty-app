import { Episode } from '@app/models/episodes/Episode';
import { ListState } from '@app/models/state/ListState';
import { createReducer, on } from '@ngrx/store';
import * as actions from '@state/actions/episodes.actions';

export const initialState: ListState<Episode> = {
  pagination: {
    page: 1,
    totalPages: 1,
  },
  items: [],
  query: {
    name: ''
  }
};

export const episodesReducer = createReducer(
  initialState,
  on(actions.getEpisodes, (state, payload) => {    
    return {
      pagination: state.pagination,
      items: state.items,
      query: {
        name: payload['name']
      }
    };
  }),
  on(actions.setEpisodes, (state, payload) => {    
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
  on(actions.clearEpisodes, (state) => initialState)
);