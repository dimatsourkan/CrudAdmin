import { Injectable } from '@angular/core';
import { CRUDService } from '../../BaseClasses/Services/Crud.service';
import { IUser, User } from './User.model';
import { IResult } from '../../BaseClasses/Models/Result.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from '../../constants';
import {UserDataService} from "./User.data";


/**
 * Сервис для работы с пользователями
 */
@Injectable()
export class UserService extends CRUDService<IUser> {

    constructor(
        protected http : Http,
        protected UserDataService : UserDataService
    ) {
        super('users', http, UserDataService);
    }

    /**
     * Получение данных профиля
     * @returns {Observable<IResult<IUser>>}
     */
    getProfile() : Observable<IResult<IUser>> {
        return this.http
            .get(`${BASE_URL}/profile`, {headers: this.headers})
            .map(this.postResponse)
            .map((res: IResult<IUser>): IResult<IUser> => this.wrapObject(res))
            .map((res: IResult<IUser>): IResult<IUser> => {
                this.UserDataService.current = res.data;
                return res;
            });
    }

    createEntity(entity: IUser): IUser {
        return new User(entity);
    }
}
