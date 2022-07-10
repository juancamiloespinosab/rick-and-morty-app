import { Location } from '@models/locations/Location'
import { Item } from '../Item';

export interface Character extends Item {
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  episode: string[];
  url: string;
  created: Date;
}
