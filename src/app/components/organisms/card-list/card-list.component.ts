import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '@app/models/characters/Character';
import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/state/ListState';
import { getCharacters } from '@app/state/actions/characters.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@app/models/state/AppState';
import { Item } from '@app/models/Item';
import { getLocations } from '@app/state/actions/locations.actions';

@Component({
  selector: 'o-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  listActions = [
    { name: 'characters', action: getCharacters },
    { name: 'locations', action: getLocations },
  ];

  listState$: Observable<ListState<Character | Location>>;
  listState: ListState<Character | Location>;
  list: Item[] = [];

  actualListName: string = 'characters';

  modalScrollDistance = 0.5;
  modalScrollThrottle = 1000;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.actualListName = this.getLastPath(this.router.url);

    this.listState$ = this.store.select(this.actualListName);

    this.listState$.subscribe((data) => {
      this.listState = data;
      this.list = [...this.list, ...this.listState.items];
    });
  }

  ngAfterViewInit() {
    this.loadItems();
  }

  loadItems() {
    const totalPages = this.listState.pagination.totalPages;
    const actualPage = this.listState.pagination.page;

    if (actualPage <= totalPages) {
      const action = this.getAction();
      this.store.dispatch(
        action({
          name: '',
          page: this.listState.pagination.page,
        })
      );
    } else {
      // TODO: manejar mensaje
    }
  }

  getLastPath(url: string): string {
    const segments =
      this.router.parseUrl(url).root.children['primary'].segments;
    return segments[segments.length - 1].path;
  }

  getAction() {
    return (
      this.listActions.find((action) => action.name === this.actualListName)
        ?.action || getCharacters
    );
  }
}
