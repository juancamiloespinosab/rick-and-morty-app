import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getCharacters } from '@app/state/actions/characters.actions';
import { getEpisodes } from '@app/state/actions/episodes.actions';
import { getLocations } from '@app/state/actions/locations.actions';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  listActions = [
    { name: 'characters', action: getCharacters },
    { name: 'locations', action: getLocations },
    { name: 'episodes', action: getEpisodes },
  ];

  placeholderImagesFolderUrl = 'assets/images/placeholder/';
  
  constructor(private router: Router) {}

  getLastPath(): string {
    const url = this.router.url;

    const segments =
      this.router.parseUrl(url).root.children['primary'].segments;
    return segments[segments.length - 1].path;
  }

  getAction(name: string) {
    return (
      this.listActions.find((action) => action.name === name)
        ?.action || getCharacters
    );
  }

  getPlaceholderBackground() {
    const actualPath = this.getLastPath();
    return `${this.placeholderImagesFolderUrl}${actualPath}.png`
  }
}
