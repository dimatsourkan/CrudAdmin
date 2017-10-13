import {Component} from "@angular/core";
import {BaseCrudListComponent} from "../../../../BaseClasses/Components/BaseList.component";
import {IUser, User} from "../../../../BaseModules/User/User.model";
import {UserService} from "../../../../BaseModules/User/User.service";
import {UserDataService} from "../../../../BaseModules/User/User.data";


@Component({
    selector: 'list',
    templateUrl: 'List.component.html'
})

export class ListComponent extends BaseCrudListComponent<IUser> {

    itemNameKey : string = 'fullName';

    constructor(
        protected UserService : UserService,
        protected DataService : UserDataService
    ) {
        super(User, UserService, DataService);
    }
}
