import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { RickAndMortyApiService } from '@app/services/rick-and-morty-api/rick-and-morty-api.service';
import { QueryParams } from '@app/models/query/QueryParams';
import { EpisodesActionTypes, errorEpisodes, setEpisodes } from '../actions/episodes.actions';

@Injectable()
export class EpisodesEffects {
  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EpisodesActionTypes.getEpisodes),
      mergeMap((payload: QueryParams) =>
        this.rickAndMortyApiService
          .getAllEpisodes({ name: payload['name'], page: payload['page'] })
          .pipe(
            map((payload: any) => setEpisodes(payload)),
            catchError(({ error }) => {
              return of(errorEpisodes(error.error));
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private rickAndMortyApiService: RickAndMortyApiService
  ) {}
}
