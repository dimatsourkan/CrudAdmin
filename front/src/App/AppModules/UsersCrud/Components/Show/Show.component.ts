import {Component} from "@angular/core";
import {IUser, User} from "../../../../EntityModules/User/User.model";
import {BaseCrudShowComponent} from "../../../../BaseClasses/Components/BaseShow.component";
import {UserService} from "../../../../EntityModules/User/User.service";
import {UserDataService} from "../../../../EntityModules/User/User.data";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'show-page',
    templateUrl: './Show.component.html'
})

export class ShowComponent extends BaseCrudShowComponent<IUser> {

    constructor(
        public UserService      : UserService,
        public DataService      : UserDataService,
        public ActivatedRoute   : ActivatedRoute
    ) {
        super(User, UserService, DataService, ActivatedRoute);
    }

}
