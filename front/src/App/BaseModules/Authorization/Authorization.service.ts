import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../constants';
import { TokenService } from '../../BaseClasses/Services/Token.service';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthorizationService {

    /**
     * Хедеры для отправки на сервер
     */
    headers: Headers;

    constructor(
        private http: Http,
        private token: TokenService
    ) {
        this.headers = new Headers();
    }

    /**
     * Авторизация пользователя
     * @param data - Объект с данными авторизации { email : '', password : '' }
     * @returns {Observable<Response>}
     */
    login(data: Object): Observable<any> {
        return this.http
            .post(`${BASE_URL}/auth/login`, data, { headers : this.headers })
            .map((res: any) => this.setLogin(res));
    };

    /**
     * Запрос на восстановление пароля
     * @param {Object} data
     * @returns {Observable<any>}
     */
    recoveryEmail(data: Object) {
        return this.http.post(`${BASE_URL}/auth/password/email`, data, { headers : this.headers });
    }

    /**
     * Изменение пароля
     * @param {Object} data
     * @returns {Observable<any>}
     */
    confirmRecovery(data: Object) {
        return this.http
            .post(`${BASE_URL}/auth/password/reset`, data, { headers : this.headers })
            .map((res: any) => this.setLogin(res));
    }

    setLogin(res: any) {
        /** Установка токена **/
        this.token.setToken(res.json().api_token);
        /** Возвращаем результат **/
        return res.json();
    }

    /**
     * Логаут - требуется только вызвать этот метод
     * Токен для идентификации подставляется сам
     * @returns {Observable<Response>}
     */
    logout() {
        this.token.resetToken();
    }

    /**
     * Проверяет авторизован ли пользователь по наличию токена в локальном хранилище
     * @returns {Promise<boolean>}
     */
    isAuthenticated(): boolean {
        return !!this.token.getToken();
    }
}