import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '@app/models/characters/Character';
import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/ListState';
import { getCharacters } from '@app/state/actions/characters.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@app/models/AppState';
import { Item } from '@app/models/Item';

@Component({
  selector: 'o-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  listActions = {
    'characters': getCharacters
  }

  listState$: Observable<ListState<Character | Location>>;
  listState: ListState<Character | Location>;
  list: Item[] = [];

  actualListName: string = '';

  modalScrollDistance = 0.5;
  modalScrollThrottle = 1000;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.actualListName = this.getLastPath(this.router.url);

    this.listState$ = this.store.select(this.actualListName);

    this.listState$.subscribe((data) => {
      console.log('state ->', data);
      this.listState = data;
      this.list = [...this.list, ...this.listState.items]
    });

    this.loadCharacters();
  }

  loadCharacters() {
    
    const totalPages = this.listState.pagination.totalPages;
    const actualPage = this.listState.pagination.page;

    if (actualPage <= totalPages) {
      this.store.dispatch(
        getCharacters({
          name: 'rick',
          page: this.listState.pagination.page,
        })
      );
    } else {
      // TODO: manejar mensaje
    }
  }

  getLastPath(url: string): string {
    const segments = this.router.parseUrl(url).root.children['primary'].segments;
    return segments[segments.length - 1].path
  }

}
