import {Component} from "@angular/core";
import {IUser, User} from "../../../../EntityModules/User/User.model";
import {UserService} from "../../../../EntityModules/User/User.service";
import {UserDataService} from "../../../../EntityModules/User/User.data";
import {ActivatedRoute} from "@angular/router";
import {BaseCrudEditComponent} from "../../../../BaseModules/CrudPage/Base/BaseEdit.component";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class EditComponent extends BaseCrudEditComponent<IUser> {

    constructor(
        public CrudService      : UserService,
        public DataService      : UserDataService,
        public ActivatedRoute   : ActivatedRoute
    ) {
        super(User, CrudService, DataService, ActivatedRoute);

        this.form = new FormGroup({
            first_name : new FormControl(''),
            last_name  : new FormControl(''),
            phone      : new FormControl(''),
            email      : new FormControl(''),
        });
    }

}
