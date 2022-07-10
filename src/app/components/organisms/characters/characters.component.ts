import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCharacters } from '@app/state/actions/characters.actions';
import { Character } from '@app/models/characters/Character';
import { ListState } from '@app/models/ListState';

@Component({
  selector: 'o-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  charactersState$: Observable<ListState<Character>>;
  charactersState: ListState<Character>;
  characterList: Character[] = [];

  modalScrollDistance = 0.5;
  modalScrollThrottle = 1000;

  constructor(private store: Store<{ characters: ListState<Character> }>) {
    this.charactersState$ = store.select('characters');
  }

  ngOnInit(): void {
    this.charactersState$.subscribe((data) => {
      console.log('state ->', data);
      this.charactersState = data;
      this.characterList = [...this.characterList, ...this.charactersState.items]
    });

    this.loadCharacters();
  }

  test() {
    console.log(22);
    
  }

  loadCharacters() {
    
    const totalPages = this.charactersState.pagination.totalPages;
    const actualPage = this.charactersState.pagination.page;

    if (actualPage <= totalPages) {
      this.store.dispatch(
        getCharacters({
          name: 'rick',
          page: this.charactersState.pagination.page,
        })
      );
    } else {
      // TODO: manejar mensaje
    }
  }
}
