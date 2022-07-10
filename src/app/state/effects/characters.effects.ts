import { Injectable } from '@angular/core';
import {
  CharactersActionTypes,
  errorCharacters,
  getCharacters,
} from '@state/actions/characters.actions';
import { RickAndMortyApiService } from '@app/services/rick-and-morty-api/rick-and-morty-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { setCharacters } from '../actions/characters.actions';
import { CharactersResponse } from '@app/models/characters/CharactersResponse';
import { QueryParams } from '@app/models/query/QueryParams';

@Injectable()
export class CharactersEffects {
  loadMovies$ = createEffect(() =>
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
