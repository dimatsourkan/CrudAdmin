import {IModel} from './Base.model';
import {IPagination} from "./Pagination.model";

interface IBaseResult<T extends IModel> {
    code: number;
    errors: any[],
    status: boolean,
    data: T | IQueryData<T>;
}

export interface IQueryData<T extends IModel> extends IPagination {
    data: T[];
}

export interface IResult<T extends IModel> extends IBaseResult<T>{
    data: T;
}

export interface IResultList<T extends IModel> extends IBaseResult<T>{
    data: IQueryData<T>;
}