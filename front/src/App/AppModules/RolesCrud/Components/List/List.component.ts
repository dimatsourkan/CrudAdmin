import {Component} from "@angular/core";
import {BaseCrudListComponent} from "../../../../BaseModules/CrudPage/Base/BaseList.component";
import {IRole, Role} from "../../../../EntityModules/Role/Role.model";
import {RoleService} from "../../../../EntityModules/Role/Role.service";
import {RoleDataService} from "../../../../EntityModules/Role/Role.data";


@Component({
    selector: 'list',
    templateUrl: 'List.component.html'
})

export class ListComponent extends BaseCrudListComponent<IRole> {

    itemNameKey : string = 'role_name';

    constructor(
        public CrudService : RoleService,
        public DataService : RoleDataService
    ) {
        super(Role, CrudService, DataService);
        this.filter.searchItems([
            'role_label_en',
            'role_label_ru',
            'role_name'
        ])
    }
}
