import {Component} from "@angular/core";
import {IUser, User} from "../../../../BaseModules/User/User.model";
import {BaseCrudShowComponent} from "../../../../BaseClasses/Components/BaseShow.component";
import {UserService} from "../../../../BaseModules/User/User.service";
import {UserDataService} from "../../../../BaseModules/User/User.data";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'show-page',
    templateUrl: './Show.component.html'
})

export class ShowComponent extends BaseCrudShowComponent<IUser> {

    constructor(
        protected UserService      : UserService,
        protected DataService      : UserDataService,
        protected ActivatedRoute   : ActivatedRoute
    ) {
        super(User, UserService, DataService, ActivatedRoute);
    }

}
