import { Episode } from "./Episode";

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface EpisodesResponse {
  info: Info;
  results: Episode[];
}
