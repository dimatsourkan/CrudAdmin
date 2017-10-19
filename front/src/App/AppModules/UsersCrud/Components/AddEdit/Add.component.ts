import {Component} from "@angular/core";
import {IUser, User} from "../../../../EntityModules/User/User.model";
import {UserService} from "../../../../EntityModules/User/User.service";
import {UserDataService} from "../../../../EntityModules/User/User.data";
import {FormControl, FormGroup} from "@angular/forms";
import {BaseCrudAddComponent} from "../../../../BaseClasses/Components/BaseAdd.component";


@Component({
    selector: 'edit-page',
    templateUrl: './AddEdit.component.html'
})

export class AddComponent extends BaseCrudAddComponent<IUser> {

    constructor(
        public UserService      : UserService,
        public DataService      : UserDataService
    ) {
        super(User, UserService, DataService);

        this.form = new FormGroup({
            first_name : new FormControl(''),
            last_name  : new FormControl(''),
            phone      : new FormControl(''),
            email      : new FormControl('')
        });

        this.form.valueChanges.subscribe(res => {
            console.log(res);
        })
    }

}
