import { Location } from "./Location";

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface LocationsResponse {
  info: Info;
  results: Location[];
}
