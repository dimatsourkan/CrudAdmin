import {Component} from "@angular/core";
import {BaseCrudListComponent} from "../../../../BaseModules/CrudPage/Base/BaseList.component";
import {IUser, User} from "../../../../EntityModules/User/User.model";
import {UserService} from "../../../../EntityModules/User/User.service";
import {UserDataService} from "../../../../EntityModules/User/User.data";


@Component({
    selector: 'list',
    templateUrl: 'List.component.html'
})

export class ListComponent extends BaseCrudListComponent<IUser> {

    itemNameKey : string = 'fullName';

    constructor(
        public CrudService : UserService,
        public DataService : UserDataService
    ) {
        super(User, CrudService, DataService);
        this.filter.searchItems([
            'first_name',
            'last_name',
            'email'
        ])
    }
}
