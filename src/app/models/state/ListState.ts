import { Pagination } from "../Pagination";

export interface ListState<T> {
    pagination: Pagination,
    items: T[]
}