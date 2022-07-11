import { Component, OnInit } from '@angular/core';
import { Character } from '@app/models/characters/Character';
import { Location } from '@app/models/locations/Location';
import { ListState } from '@app/models/state/ListState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@app/models/state/AppState';
import { Item } from '@app/models/Item';
import { UtilsService } from '@app/services/helpers/utils/utils.service';
import { Episode } from '@app/models/episodes/Episode';
import {
  clearCharacters,
  getCharacters,
} from '@app/state/actions/characters.actions';

@Component({
  selector: 'o-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  listState$: Observable<ListState<Character | Location | Episode>>;
  listState: ListState<Character | Location | Episode>;
  list: Item[] = [];

  actualListName: string = 'characters';

  modalScrollDistance = 2;
  modalScrollThrottle = 500;

  constructor(
    private store: Store<AppState>,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.actualListName = this.utilsService.getLastPath();
    this.clearData();
    this.selectStore();
    this.subscribeToObservable();
    this.loadItems();
  }

  clearData() {
    const action = this.utilsService.getAction(this.actualListName);

    this.store.dispatch(action.clear());
    this.list = [];
  }

  selectStore() {
    this.listState$ = this.store.select(this.actualListName);
  }

  subscribeToObservable() {
    this.listState$.subscribe((data) => {
      this.listState = data;
      this.updateList();
    });
  }
  
  updateList() {
    if (this.listState.query['name'] != '') this.list = []; 
    if (this.listState.pagination.page <= 2) this.list = []; 
    this.list = [...this.list, ...this.listState.items];
  }

  loadItems() {
    const totalPages = this.listState.pagination.totalPages;
    const actualPage = this.listState.pagination.page;

    if (actualPage <= totalPages) {
      const action = this.utilsService.getAction(this.actualListName);
      this.store.dispatch(
        action.get({
          name: this.listState.query['name'],
          page: this.listState.pagination.page,
        })
      );
    } else {
      // TODO: manejar mensaje
    }
  }
}
