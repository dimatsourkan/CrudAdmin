import {Injectable} from "@angular/core";
import {IModel} from "../Models/Base.model";
import {PaginationModel} from "../Models/Pagination.model";
import {DEFAULT_SORT} from "../../constants";

/**
 * Базовый сервис для хранения данных
 */
@Injectable()
export class DataService<T extends IModel> {

    data       : T[] = [];
    item       : T   = null;
    selected   : T[] = [];
    pagination : PaginationModel = new PaginationModel();
    sort       : string = DEFAULT_SORT;
    search     : string = null;

    getUpdatedItem(item : T, data : any) {
        for(let i in item) {
            if(data[i]) {
                item[i] = data[i];
            }
        }

        return item;
    }

}