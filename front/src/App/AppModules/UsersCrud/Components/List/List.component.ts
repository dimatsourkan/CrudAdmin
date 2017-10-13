import {Component} from "@angular/core";
import {BaseCrudComponent} from "../../../../BaseClasses/Components/Base.component";
import {IUser, User} from "../../../../BaseModules/User/User.model";
import {UserService} from "../../../../BaseModules/User/User.service";
import {UserDataService} from "../../../../BaseModules/User/User.data";


@Component({
    selector: 'list',
    templateUrl: 'List.component.html'
})

export class ListComponent extends BaseCrudComponent<IUser> {

    itemNameKey : string = 'fullName';

    constructor(
        protected UserService : UserService,
        protected UserDataService : UserDataService
    ) {
        super(User, UserService, UserDataService);
    }
}
