import { Component, OnInit } from '@angular/core';
import { Character } from '@app/models/characters/Character';
import { Episode } from '@app/models/episodes/Episode';
import { AppState } from '@app/models/state/AppState';
import { ListState } from '@app/models/state/ListState';
import { Location } from '@app/models/locations/Location';
import { UtilsService } from '@app/services/helpers/utils/utils.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCharacters } from '@app/state/actions/characters.actions';

@Component({
  selector: 'm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  listStateSubscription: Subscription;
  
  listState$: Observable<ListState<Character | Location | Episode>>;
  listState: ListState<Character | Location | Episode>;

  actualListName: string = 'characters';

  constructor(
    private store: Store<AppState>,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.selectStore();
    this.subscribeToObservable();
  }

  selectStore() {
    this.listState$ = this.store.select(this.actualListName);
  }

  subscribeToObservable() {
    this.listStateSubscription = this.listState$.subscribe((data) => {
      this.listState = data;
    });
  }

  search(query: string) {
    this.actualListName = this.utilsService.getLastPath();

    const action = this.utilsService.getAction(this.actualListName);
    this.store.dispatch(
      action.get({
        name: query,
        page: 1,
      })
    );
  }

  ngOnDestroy() {
    this.listStateSubscription.unsubscribe();
  }
}
