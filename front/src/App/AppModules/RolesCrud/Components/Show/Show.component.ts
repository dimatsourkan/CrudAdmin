import {Component} from "@angular/core";
import {BaseCrudShowComponent} from "../../../../BaseModules/CrudPage/Base/BaseShow.component";
import {ActivatedRoute} from "@angular/router";
import {IRole, Role} from "../../../../EntityModules/Role/Role.model";
import {RoleService} from "../../../../EntityModules/Role/Role.service";
import {RoleDataService} from "../../../../EntityModules/Role/Role.data";


@Component({
    selector: 'show-page',
    templateUrl: './Show.component.html'
})

export class ShowComponent extends BaseCrudShowComponent<IRole> {

    constructor(
        public CrudService      : RoleService,
        public DataService      : RoleDataService,
        public ActivatedRoute   : ActivatedRoute
    ) {
        super(Role, CrudService, DataService, ActivatedRoute);
    }

}
