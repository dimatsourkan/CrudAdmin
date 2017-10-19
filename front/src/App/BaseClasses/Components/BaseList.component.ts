import { CRUDService } from '../Services/Crud.service';
import {IModel} from '../Models/Base.model';
import {OnInit, OnChanges, ViewChild} from "@angular/core";
import {DataService} from "../Services/Data.service";
import {IPagination, PaginationModel} from "../Models/Pagination.model";
import {FilterService} from "../Services/Filter.service";
import {DEFAULT_SORT} from "../../constants";
import {GlobalEvents} from "../Services/Global.events";

/**
 * Базовый класс для круд компонент
 */
export abstract class BaseCrudListComponent<T extends IModel> implements OnInit, OnChanges {

    @ViewChild('crudComponent') protected crudComponent: any;
    @ViewChild('loader') protected loader: any;

    protected Entity: any;

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
     * Ключ для имени модели, требуется для вывода имени модели при удалении удаления
     * @type {string}
     */
    itemNameKey : string = 'name';

    protected GlobalEvents : GlobalEvents;

    /**
     *
     * @param entity - Сущность с которой работает класс
     * @param {CRUDService<T extends IModel>} ComponentService - Сервис с которым работает класс
     * @param {DataService<T extends IModel>} DataService - Сервис данных с которым работает класс
     */
    constructor(
        public entity           : any,
        public ComponentService : CRUDService<T>,
        public DataService      : DataService<T>
    ) {
        this.Entity = entity;
        this.GlobalEvents = new GlobalEvents();
    }

    ngOnInit() {

        this.setPagination(this.DataService.pagination);
        this.sortChange(this.DataService.sort);

        this.onLoadData();
    }

    ngOnChanges() { }

    protected changePage(page : number) {
        this.filter.page(page);
        this.pagination.current_page = page;
        this.DataService.pagination.current_page = page;
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

    /**
     * Подписывает на событие завершения запросов
     */
    protected onLoadData() {
        this.GlobalEvents.OnRequestEnd.subscribe(() => {
            if (this.loader) this.loader.hide();
        });
    }

    /**
     * Показывает лоадер
     */
    protected showLoader() {
        if (this.loader) this.loader.show();
    }

    /**
     * Устанавливает пагинацию
     * @param {IPagination} pagination
     */
    protected setPagination(pagination : IPagination) {
        this.filter.page(pagination.current_page);
        this.pagination.setPagination(pagination);
        this.DataService.pagination.setPagination(pagination);
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
        this.changePage(this.pagination.current_page);
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

    searchChange(search : string) {
        this.changePage(1);
        this.filter.search(search);
        this.DataService.search = search;
        this.query().subscribe();
    }
}