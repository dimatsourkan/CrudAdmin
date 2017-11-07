import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from "../../../../../BaseModules/Validation/Validation.service";
import { AuthorizationService } from "../../../../../BaseModules/Authorization/Authorization.service";
import {UserService} from "../../../../../EntityModules/User/User.service";

@Component({
    selector: 'login',
    templateUrl: './Login.component.html'
})

export class LoginComponent {

    form: FormGroup;

    @ViewChild('loader') private loader: any;

    constructor(
        private Router : Router,
        private UserService : UserService,
        private ValidatorService : ValidatorService,
        private AuthorizationService : AuthorizationService
    ) {
        this.form = new FormGroup({
            email    : new FormControl(''),
            password : new FormControl('')
        });

    }

    login() {

        this.loader.show();
        this.AuthorizationService.login(this.form.value).subscribe(() => {
            this.UserService.getProfile().subscribe();
            this.Router.navigate(['users']);
            this.loader.hide();
        }, err => {
            this.loader.hide();

            if(err.status_code == 422) {
                this.ValidatorService.addErrorToForm(this.form, err.errors);
            }

        });

    }
}
