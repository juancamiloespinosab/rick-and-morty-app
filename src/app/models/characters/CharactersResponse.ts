import { Character } from './Character';

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface CharactersResponse {
  info: Info;
  results: Character[];
}
