import { Injectable } from '@angular/core';
import { IUser, User } from './User.model';
import {DataService} from "../../BaseClasses/Services/Data.service";


/**
 * Сервис для хранения всех данных пользователей
 */
@Injectable()
export class UserDataService extends DataService<IUser> {
    current : IUser = null;
}
