import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  setCharacters,
  CharactersActionTypes,
  errorCharacters
} from '@state/actions/characters.actions';
import { RickAndMortyApiService } from '@app/services/rick-and-morty-api/rick-and-morty-api.service';
import { QueryParams } from '@app/models/query/QueryParams';

@Injectable()
export class CharactersEffects {
  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActionTypes.getCharacters),
      mergeMap((payload: QueryParams) =>
        this.rickAndMortyApiService
          .getAllCharacters({ name: payload['name'], page: payload['page'] })
          .pipe(
            map((payload: any) => setCharacters(payload)),
            catchError(({ error }) => {
              return of(errorCharacters(error.error));
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
