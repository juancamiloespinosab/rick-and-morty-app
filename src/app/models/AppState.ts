import { Character } from "./characters/Character";
import { Episode } from "./episodes/Episode";
import { ListState } from "./ListState";
import { Location } from "./locations/Location";

export interface AppState {
    [name: string]: ListState<Character | Location | Episode>
}