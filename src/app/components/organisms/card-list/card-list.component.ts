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
import { UtilsService } from '@app/services/helpers/utils/utils.service';

@Component({
  selector: 'o-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {


  listState$: Observable<ListState<Character | Location>>;
  listState: ListState<Character | Location>;
  list: Item[] = [];

  actualListName: string = 'characters';

  modalScrollDistance = 0.5;
  modalScrollThrottle = 1000;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.actualListName = this.utilsService.getLastPath();
    this.selectStore();
    this.subscribeToObservable();
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
    this.list = [...this.list, ...this.listState.items];
  }

  ngAfterViewInit() {
    this.loadItems();
  }

  loadItems() {
    const totalPages = this.listState.pagination.totalPages;
    const actualPage = this.listState.pagination.page;

    if (actualPage <= totalPages) {
      const action = this.utilsService.getAction(this.actualListName);
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


}
