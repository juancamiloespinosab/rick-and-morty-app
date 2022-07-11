import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  clearCharacters,
  getCharacters,
} from '@app/state/actions/characters.actions';
import {
  clearEpisodes,
  getEpisodes,
} from '@app/state/actions/episodes.actions';
import {
  clearLocations,
  getLocations,
} from '@app/state/actions/locations.actions';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  listActions: { [params: string]: any } = {
    characters: { get: getCharacters, clear: clearCharacters },
    locations: { get: getLocations, clear: clearLocations },
    episodes: { get: getEpisodes, clear: clearEpisodes },
  };

  placeholderImagesFolderUrl = 'assets/images/placeholder/';

  constructor(private router: Router) {}

  getLastPath(): string {
    const url = this.router.url;

    const segments =
      this.router.parseUrl(url).root.children['primary'].segments;
    return segments[segments.length - 1].path;
  }

  getAction(name: string) {    
    return this.listActions[name];
  }

  getPlaceholderBackground() {
    const actualPath = this.getLastPath();
    return `${this.placeholderImagesFolderUrl}${actualPath}.png`;
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  getRouterEventsObservable() {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
  }
}
