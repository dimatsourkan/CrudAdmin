import {Component} from "@angular/core";
import {IUser, User} from "../../../../BaseModules/User/User.model";
import {UserService} from "../../../../BaseModules/User/User.service";
import {UserDataService} from "../../../../BaseModules/User/User.data";
import {ActivatedRoute} from "@angular/router";
import {BaseCrudEditComponent} from "../../../../BaseClasses/Components/BaseEdit.component";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class EditComponent extends BaseCrudEditComponent<IUser> {

    constructor(
        protected UserService      : UserService,
        protected DataService      : UserDataService,
        protected ActivatedRoute   : ActivatedRoute
    ) {
        super(User, UserService, DataService, ActivatedRoute);

        this.form = new FormGroup({
            first_name : new FormControl(''),
            last_name  : new FormControl(''),
            phone      : new FormControl(''),
            email      : new FormControl(''),
        });
    }

}
