import { CRUDService } from '../Services/Crud.service';
import {IModel} from '../Models/Base.model';
import {OnInit, OnChanges, ViewChild} from "@angular/core";
import {DataService} from "../Services/Data.service";
import {IPagination, PaginationModel} from "../Models/Pagination.model";
import {FilterService} from "../Services/Filter.service";
import {DEFAULT_SORT} from "../../constants";

/**
 * Базовый класс для круд компонент
 */
export abstract class BaseCrudComponent<T extends IModel> implements OnInit, OnChanges {

    @ViewChild('crudComponent') protected crudComponent: any;
    @ViewChild('loader') protected loader: any;

    private Entity: any;

    /**
     * Список полученых данных
     * @type {Array}
     */
    data: T[] = [];

    /**
     * Переменная хранит текущую выбранную модель
     */
    item: T;

    /**
     * Модель пагинатора
     * @type {PaginationModel}
     */
    pagination : PaginationModel = new PaginationModel();

    /**
     * Объекта фильтра
     * @type {FilterService}
     */
    filter : FilterService = new FilterService();

    /**
     * Хранит данные о сортировке
     */
    sortBy : string = DEFAULT_SORT;

    /**
     * Ключ для имени модели, требуется для удаления
     * @type {string}
     */
    itemNameKey : string = 'name';

    /**
     *
     * @param entity - Сущность с которой работает класс
     * @param {CRUDService<T extends IModel>} ComponentService - Сервис с которым работает класс
     * @param {DataService<T extends IModel>} DataService - Сервис данных с которым работает класс
     */
    constructor(
        private entity : any,
        protected ComponentService : CRUDService<T>,
        protected DataService : DataService<T>
    ) {
        this.Entity = entity;
    }

    ngOnInit() {

        if(this.pagination) {
            this.pagination.setPagination(this.DataService.pagination);
            this.setPage(this.DataService.pagination.current_page);
        }

        this.ComponentService.OnLoadData.subscribe(() => {
            if (this.loader) this.loader.hide();
        });

        this.sortChange(this.DataService.sort);
    }

    ngOnChanges() { }

    protected showLoader() {
        if (this.loader) this.loader.show();
    }

    protected query() {
        this.showLoader();
        return this.ComponentService.query(this.filter.filter).map(res => this.setPagination(res.data));
    }

    protected get(id: number) {
        this.showLoader();
        return this.ComponentService.get(id)
    }

    protected save(data: T) {
        this.showLoader();
        return this.ComponentService.save(data);
    }

    protected update(data: T) {
        this.showLoader();
        return this.ComponentService.update(data);
    }

    protected remove(data: T) {
        this.showLoader();
        return this.ComponentService.remove(data);
    }

    protected setPagination(pagination : IPagination) {
        if(this.pagination) {
            this.pagination.setPagination(pagination);
            this.DataService.pagination.setPagination(pagination);
        }
    }

    /**
     * Открывает попап для удаления
     * @param {T} data
     */
    openDeletePopup(data: T) {
        this.item = new this.Entity(data);
        this.crudComponent.showDelete(this.item[this.itemNameKey]);
    }

    /**
     * Удаляет модель
     */
    deleteModel() {
        this.crudComponent.hideDelete();
        this.remove(this.item).subscribe();
    }

    /**
     * Срабатывает при изменении пагинации
     */
    pageChanged() {
        this.setPage(this.pagination.current_page);
        this.query().subscribe();
    }

    /**
     * Срабатывает при изменении сортировки
     * @param {string} sortBy
     */
    sortChange(sortBy : string) {
        this.sortBy = sortBy;
        this.filter.sort(this.sortBy);
        this.DataService.sort = this.sortBy;
        this.query().subscribe();
    }

    /**
     * Устанавливает текущую страницу для фильтра
     * @param {number} page
     */
    setPage(page : number = 1) {
        this.filter.page(page);
    }
}