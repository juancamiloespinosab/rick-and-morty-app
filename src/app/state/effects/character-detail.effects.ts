import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { RickAndMortyApiService } from '@app/services/rick-and-morty-api/rick-and-morty-api.service';
import { QueryParams } from '@app/models/query/QueryParams';
import {
  CharacterDetailActionTypes,
  errorCharacterDetail,
  setCharacterDetail,
} from '../actions/character-detail.actions';

@Injectable()
export class CharacterDetailEffects {
  loadCharacterDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterDetailActionTypes.getCharacterDetail),
      mergeMap((payload: QueryParams) =>
        this.rickAndMortyApiService.getOneCharacterById(+payload['id']).pipe(
          map((payload: any) => setCharacterDetail(payload)),
          catchError(({ error }) => {
            return of(errorCharacterDetail(error.error));
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
