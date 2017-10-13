export interface IPagination {

    current_page: number;
    total: number;
    last_page: number;
    per_page : number;
}

export class PaginationModel implements IPagination{
    current_page: number;
    total: number;
    last_page: number;
    per_page : number;

    constructor(pagination: IPagination = { current_page: 1, total: 1, last_page: 1, per_page : 1 }){
        this.setPagination(pagination);
    }

    setPagination(pagination: IPagination){
        this.current_page = pagination.current_page;
        this.total        = pagination.total;
        this.last_page    = pagination.last_page;
        this.per_page     = pagination.per_page;
    }

    getPagination() {
        return {
            current_page : this.current_page,
            total        : this.total,
            last_page    : this.last_page,
            per_page     : this.per_page
        }
    }
}