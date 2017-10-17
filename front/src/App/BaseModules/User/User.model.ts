import { BaseModel, IModel } from '../../BaseClasses/Models/Base.model';

export interface IUser extends IModel {
    created_at_mysql : string;
    email      : string;
    first_name : string;
    last_name  : string;
    phone      : string;

    fullName   : string;
}

export class User extends BaseModel implements IUser {

    created_at_mysql : string;
    email      : string;
    first_name : string;
    last_name  : string;
    phone      : string;
    file : any;

    constructor(model ?: any) {
        super(model);
        if (model) {
            this.created_at_mysql = model.created_at_mysql || '';
            this.email      = model.email                  || '';
            this.first_name = model.first_name             || '';
            this.last_name  = model.last_name              || '';
            this.phone      = model.phone                  || '';
        }
    }

    get fullName() : string {
        return this.first_name+' '+this.last_name;
    }
}