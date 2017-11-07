import { Injectable } from '@angular/core';
import { IRole } from './Role.model';
import {DataService} from "../../BaseClasses/Services/Data.service";


/**
 * Сервис для хранения всех данных ролей
 */
@Injectable()
export class RoleDataService extends DataService<IRole> {}
