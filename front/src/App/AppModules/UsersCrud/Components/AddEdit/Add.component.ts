import {Component} from "@angular/core";
import {IUser, User} from "../../../../BaseModules/User/User.model";
import {UserService} from "../../../../BaseModules/User/User.service";
import {UserDataService} from "../../../../BaseModules/User/User.data";
import {FormControl, FormGroup} from "@angular/forms";
import {BaseCrudAddComponent} from "../../../../BaseClasses/Components/BaseAdd.component";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class AddComponent extends BaseCrudAddComponent<IUser> {

    constructor(
        protected UserService      : UserService,
        protected DataService      : UserDataService
    ) {
        super(User, UserService, DataService);

        this.form = new FormGroup({
            first_name : new FormControl(''),
            last_name  : new FormControl(''),
            phone      : new FormControl(''),
            email      : new FormControl(''),
        });
    }

}
