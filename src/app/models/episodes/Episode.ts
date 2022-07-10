import { Item } from "../Item";

export interface Episode extends Item {
    id: number;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
  }