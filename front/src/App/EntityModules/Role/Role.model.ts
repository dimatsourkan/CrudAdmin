import { BaseModel, IModel } from '../../BaseClasses/Models/Base.model';

export interface IRole extends IModel {
    created_at_mysql : string;
    is_protected     : boolean;
    role_label_en    : string;
    role_label_ru    : string;
    role_name        : string;
}

export class Role extends BaseModel implements IRole {

    created_at_mysql : string;
    is_protected     : boolean;
    role_label_en    : string;
    role_label_ru    : string;
    role_name        : string;

    constructor(model ?: any) {
        super(model);
        if (model) {
            this.created_at_mysql = model.created_at_mysql || '';
            this.is_protected     = model.is_protected     || false;
            this.role_label_en    = model.role_label_en    || '';
            this.role_label_ru    = model.role_label_ru    || '';
            this.role_name        = model.role_name        || '';
        }
    }
}