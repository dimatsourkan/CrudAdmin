import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {DEFAULT_SORT, LIMIT_ON_PAGE} from "../../constants";

@Injectable()
export class FilterService {

    /**
     * Переменная хранит ключи для поиска
     * 'name|email'
     * @type {string}
     */
    private _searchFields  : string = '';
    private _limit         : string|number = LIMIT_ON_PAGE;
    private _page          : string|number = 1;
    private _search        : string = '';
    private _sort          : string = DEFAULT_SORT;
    private _default_sort  : string = null;
    private _expand        : string = '';
    private _filterBuilder : string = '';
    private _filterExpand  : string = '';
    private _where         : any = {};

    /**
     *
     * @param searchFields - массив с ключами для поиска
     */
    constructor(searchFields : string[] = ['']) {
        this.transformSearchFields(searchFields);
    }

    private transformSearchFields(fields : string[]) {
        this._searchFields = fields.join('|');
    }

    private transformExpands(expand : string[]) {
        this._expand = expand.join(',');
    }

    private getFilterParams() {
        let filterParams = new URLSearchParams();

        if(this._expand) {
            filterParams.set('expand', this._expand.toString());
        }

        if(this._page) {
            filterParams.set('page', this._page.toString());
        }

        if(this._limit) {
            filterParams.set('limit', this._limit.toString());
        }

        if(this._sort) {
            if(this._sort == 'default' && !this._default_sort) {
                this._sort = DEFAULT_SORT;
            }
            else if(this._sort == 'default' && this._default_sort) {
                this._sort = this._default_sort;
            }

            filterParams.set('sort', this._sort.toString());
        }

        if(this._search) {
            filterParams.set('search', JSON.stringify({
                query  : this._search,
                fields : this._searchFields
            }));
        }

        if(this._filterBuilder) {
            filterParams.set('filter', this._filterBuilder);
        }

        if(this._filterExpand) {
            filterParams.set('filterExpand', this._filterExpand);
        }

        return filterParams;
    }

    searchItems(searchFields : string[] = ['']) {
        this.transformSearchFields(searchFields);
    }

    search(search : string) {
        this._search = search;
    }

    page(page : string|number) {
        this._page = page;
    }

    limit(limit : string|number) {
        this._limit = limit;
    }

    sort(sortParam : string, defaultSort : string = null) {
        this._sort         = sortParam;
        this._default_sort = defaultSort;
    }

    expand(expand : string[]) {
        this.transformExpands(expand);
    }

    filterBuilder(filter: string){
        this._filterBuilder = filter;
    }

    filterExpand(filter: string){
        this._filterExpand = filter;
    }

    /**
     * Метод Возвращает данные фильтра
     * @returns {URLSearchParams}
     */
    get filter() : URLSearchParams {
        return this.getFilterParams();
    }



}
