import { Injectable } from '@angular/core';
import { CRUDService } from '../../BaseClasses/Services/Crud.service';
import { IRole, Role } from './Role.model';
import { Http } from '@angular/http';
import { RoleDataService } from "./Role.data";


/**
 * Сервис для работы с ролями
 */
@Injectable()
export class RoleService extends CRUDService<IRole> {

    constructor(
        protected http : Http,
        protected UserDataService : RoleDataService
    ) {
        super('roles', http, UserDataService);
    }

    createEntity(entity: IRole): IRole {
        return new Role(entity);
    }
}
