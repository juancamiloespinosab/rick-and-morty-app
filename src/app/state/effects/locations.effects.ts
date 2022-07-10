import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { RickAndMortyApiService } from '@app/services/rick-and-morty-api/rick-and-morty-api.service';
import { QueryParams } from '@app/models/query/QueryParams';
import { errorLocations, LocationsActionTypes, setLocations } from '../actions/locations.actions';

@Injectable()
export class LocationsEffects {
  loadLocations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationsActionTypes.getLocations),
      mergeMap((payload: QueryParams) =>
        this.rickAndMortyApiService
          .getAllLocations({ name: payload['name'], page: payload['page'] })
          .pipe(
            map((payload: any) => setLocations(payload)),
            catchError(({ error }) => {
              return of(errorLocations(error.error));
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
