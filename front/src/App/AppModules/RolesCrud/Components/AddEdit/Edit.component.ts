import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BaseCrudEditComponent} from "../../../../BaseModules/CrudPage/Base/BaseEdit.component";
import {FormControl, FormGroup} from "@angular/forms";
import {RoleDataService} from "../../../../EntityModules/Role/Role.data";
import {RoleService} from "../../../../EntityModules/Role/Role.service";
import {IRole, Role} from "../../../../EntityModules/Role/Role.model";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class EditComponent extends BaseCrudEditComponent<IRole> {

    constructor(
        public CrudService      : RoleService,
        public DataService      : RoleDataService,
        public ActivatedRoute   : ActivatedRoute
    ) {
        super(Role, CrudService, DataService, ActivatedRoute);

        this.form = new FormGroup({
            role_label_en : new FormControl(''),
            role_label_ru : new FormControl(''),
            role_name     : new FormControl(''),
        });
    }

}
