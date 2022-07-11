import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@app/models/characters/Character';
import { AppState } from '@app/models/state/AppState';
import {
  clearCharacterDetail,
  getCharacterDetail,
} from '@app/state/actions/character-detail.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UtilsService } from '@app/services/helpers/utils/utils.service';
import { initialState } from '@app/state/reducers/character-detail.reducer';

@Component({
  selector: 'o-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  id: number;
  data: Character;

  actualListName: string = 'character-detail';

  characterState$: Observable<Character | any>;
  characterState: Character;

  imageLoaded: boolean = false;
  imagePlaceholder: string = this.utilsService.getPlaceholderBackground();

  constructor(
    private store: Store<AppState>,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.clearData();
    this.selectStore();
    this.subscribeToObservable();
    this.id = +this.utilsService.getLastPath();
    this.loadCharacter();
  }

  clearData() {
    this.store.dispatch(clearCharacterDetail());
  }

  selectStore() {
    this.characterState$ = this.store.select(this.actualListName);
  }

  subscribeToObservable() {
    this.characterState$.subscribe((data) => {
      this.characterState = data;
      this.updateData();
    });
  }

  updateData() {
    this.data = this.characterState;
  }

  loadCharacter() {
    this.store.dispatch(
      getCharacterDetail({
        id: this.id,
      })
    );
  }
}
