import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BaseCrudAddComponent} from "../../../../BaseModules/CrudPage/Base/BaseAdd.component";
import {RoleService} from "../../../../EntityModules/Role/Role.service";
import {RoleDataService} from "../../../../EntityModules/Role/Role.data";
import {IRole, Role} from "../../../../EntityModules/Role/Role.model";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class AddComponent extends BaseCrudAddComponent<IRole> {

    constructor(
        public CrudService      : RoleService,
        public DataService      : RoleDataService
    ) {
        super(Role, CrudService, DataService);

        this.form = new FormGroup({
            role_label_en : new FormControl(''),
            role_label_ru : new FormControl(''),
            role_name     : new FormControl(''),
        });
    }

}
