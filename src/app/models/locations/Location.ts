import { Item } from "../Item";

export interface Location extends Item {
    url: string;
    id?: number;
    type?: string;
    dimension?: string;
    residents?: string[];
    created?: Date;
}