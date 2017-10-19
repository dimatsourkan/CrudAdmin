import {Injectable} from '@angular/core';
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../BaseClasses/Services/Token.service';
import 'rxjs/add/operator/map';
import {GlobalEvents} from "../../BaseClasses/Services/Global.events";
import {HttpErrorService} from "../HttpError/HttpError.service";

@Injectable()
export class AppHttpService extends Http {

    protected token: TokenService;
    protected GlobalEvents : GlobalEvents;

    constructor(
        _backend: ConnectionBackend,
        _defaultOptions: RequestOptions,
        private HttpErrorService : HttpErrorService
    ) {
        super(_backend, _defaultOptions);

        this.GlobalEvents = new GlobalEvents();
        this.token = new TokenService();
    }

    /**
     * Функция добавляет токен в хедер
     * @param options
     */
    private setAccessHeader(options?: RequestOptionsArgs) {

        this.token.addToHeader(options.headers);

    }

    /**
     * Функция добавляет хередеры перед отправкой запроса
     * @param options
     */
    private modifyHeaders(options?: RequestOptionsArgs) {

        if (options && options.headers) {
            options.headers.set('X-Requested-With', 'XMLHttpRequest');
            this.setAccessHeader(options);
        }

    }


    get(url: string, options?: RequestOptionsArgs): Observable<Response> {

        this.modifyHeaders(options);
        return super.get(url, options)
            .map(res => this.returnRes(res))
            .catch(error => this.errorHandler(error));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {

        this.modifyHeaders(options);
        return super.post(url, body, options)
            .map(res => this.returnRes(res))
            .catch(error => this.errorHandler(error));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {

        this.modifyHeaders(options);
        return super.put(url, body, options)
            .map(res => this.returnRes(res))
            .catch(error => this.errorHandler(error));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {

        this.modifyHeaders(options);
        return super.delete(url, options)
            .map(res => this.returnRes(res))
            .catch(error => this.errorHandler(error));
    }

    private returnRes(res : any){
        this.GlobalEvents.OnRequestEnd.emit();
         return res;
    }

    private errorHandler(error: Response) {
        this.HttpErrorService.setError(error);
        this.GlobalEvents.OnRequestEnd.emit(true);
        return Observable.throw(error.json());
    }
}
