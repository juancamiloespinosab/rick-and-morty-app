import { Pagination } from "../Pagination";
import { QueryParams } from "../query/QueryParams";

export interface ListState<T> {
    pagination: Pagination,
    items: T[]
    query: QueryParams,
}