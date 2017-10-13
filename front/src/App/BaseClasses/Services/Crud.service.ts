import { Observable } from 'rxjs/Observable';
import {EventEmitter, Injectable} from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import {IModel} from "../Models/Base.model";
import {IResult, IResultList} from "../Models/Result.model";
import {BASE_URL} from "../../constants";
import {DataService} from "./Data.service";

/**
 * Интерфейс реализации сервиса CRUD
 */
export interface ICrud<T extends IModel> {

    setCrudUrl( url: any ): string;
    save( data: IModel ): Observable<IResult<T>>;
    query( search: URLSearchParams ): Observable<IResultList<T>>;
    get( id: number|string, search: URLSearchParams ): Observable<IResult<T>>;
    update(data: IModel): Observable<IResult<T>>;
    remove(data: IModel): Observable<IResult<T>>;

}

/**
 * Абстрактный CRUD Сервис для работы с сервером
 * Его должны унаследовать все crud сервисы
 */
@Injectable()
export class CRUDService<T extends IModel> implements ICrud<T> {

    /**
     * Хедеры которые будут оправляться со всеми запросами
     */
    protected headers: Headers;

    /**
     * Урл на который круд отправляет запросы
     */
    protected crudUrl: string = '';

    public OnLoadData : EventEmitter<any> = new EventEmitter<any>();

    /**
     * Инициализация
     * @param url - Строка вида 'user' по которому должен работать круд
     * @param http - Http объект для работы с сервером
     * @param DataService - DataService для crud
     */
    constructor(
        protected url: string,
        protected http: Http,
        protected DataService ?: DataService<T>

    ) {

        this.headers = new Headers();

        this.setCrudUrl(url);
        this.crudUrl = `${BASE_URL}/${url}`;
        this.headers.append('Accept', 'application/json');

    }

    /**
     * Метод для установки url
     * @param url - Строка вида 'user' по которому должен работать круд
     */
    setCrudUrl(url: any = '') : string {
        return `${this.crudUrl}/${url}`;
    }

    /**
     * Обрадотка ответа от сервера.
     * Можно преобразовать ответ до того как сервис вернет результат
     * @param res - Результат сервера
     * @returns {any}
     */
    postResponse(res: Response) {
        try {
            return  res.json();
        }
        catch(err) {
            return res;
        }
    }

    setData(res : IResult<T>) {
        if(this.DataService) this.DataService.item = res.data;
        this.OnLoadData.emit();
        return res;
    }

    setDatas(res: IResultList<T>) {
        if(this.DataService)  this.DataService.data = res.data.data;
        this.OnLoadData.emit();
        return res;
    }

    removeData(data: T) {

        if(!this.DataService) return;

            if(this.DataService.item && this.DataService.item.id == data.id) {
            this.DataService.item = null;
        }
        for(let i = 0; i < this.DataService.data.length; i++) {
            if(this.DataService.data[i].id == data.id) {
                this.DataService.data.slice(i, 1); break;
            }
        }
        this.OnLoadData.emit();
    }


    /**
     * GET запрос для получения списка моделей
     * @param search - Объект с данными для поиска
     * @returns {Observable<Object>}
     */
    query(search: URLSearchParams = new URLSearchParams()): Observable<IResultList<T>> {

        return this.http
            .get(this.setCrudUrl(), { headers: this.headers, search })
            .map(this.postResponse)
            .map((res: IResultList<T>): IResultList<T> => this.wrapObjects(res))
            .map((res: IResultList<T>): IResultList<T> => this.setDatas(res));

    }

    /**
     * Получение модели по id
     * @param id - ID модели
     * @param search - Объект с данными для поиска
     * @returns {Observable<Object>}
     */
    get(id: number, search: URLSearchParams = new URLSearchParams()): Observable<IResult<T>> {

        return this.http
            .get(this.setCrudUrl(id), {headers: this.headers, search})
            .map(this.postResponse)
            .map((res: IResult<T>): IResult<T> => this.wrapObject(res))
            .map((res: IResult<T>): IResult<T> => this.setData(res));

    }

    /**
     * Сохранение новой модели
     * @param data - Данные модели
     * @returns {Observable<Object>}
     */
    save(data: T): Observable<IResult<T>> {

        return this.http
            .post(this.setCrudUrl(), data, { headers: this.headers })
            .map(this.postResponse)
            .map((res: IResult<T>): IResult<T> => this.wrapObject(res))
            .map((res: IResult<T>): IResult<T> => this.setData(res));
    }

    /**
     * Изменение существующей модели
     * @param data - Данные модели
     * @returns {Observable<Object>}
     */
    update(data: T): Observable<IResult<T>> {

        return this.http
            .put(this.setCrudUrl(data.id), data, { headers: this.headers })
            .map(this.postResponse)
            .map((res: IResult<T>): IResult<T> => this.wrapObject(res))
            .map((res: IResult<T>): IResult<T> => this.setData(res));

    }

    /**
     * Удаление существующей модели
     * @param data - Данные модели
     * @returns {Observable<Object>}
     */
    remove(data: T): Observable<IResult<T>> {

        return this.http
            .delete(this.setCrudUrl(data.id), { headers: this.headers })
            .map(this.postResponse)
            .map((res: IResult<T>): IResult<T> => {
                this.removeData(data);
                return res;
            })

    }

    /**
     * Функция которую если переопредилить будет возвращать обернутые обьекты.
     * @param entity - Модель для генерации
     */
    createEntity(entity: T): T {
        return entity;
    }


    /**
     * Обарачивает данные с помощью функции createEntity для возврящяемыш данных IResultList
     * @param res - Ответ сервера
     * @returns {IResultList<T>}
     */
    protected wrapObjects(res: IResultList<T>) {
        res.data.data = res.data.data.map((entity: T) => {
            return this.createEntity(entity);
        });
        return res;
    }

    /**
     * Обарачивает данные с помощью функции createEntity для возврящяемыш данных IResult
     * @param res - Ответ сервера
     * @returns {IResult<T>}
     */
    protected wrapObject(res: IResult<T>) {
        res.data = this.createEntity(res.data);
        return res;
    }
}
