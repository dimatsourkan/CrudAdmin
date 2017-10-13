import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidatorService } from '../../../../BaseModules/Validation/Validation.service';
import {AuthorizationService} from "../../../../BaseModules/Authorization/Authorization.service";

@Component({
    selector: 'recovering-pass',
    templateUrl: './Recovering-pass.component.html'
})

export class RecoveringPassComponent {

    form: FormGroup;

    @ViewChild('loader') private loader: any;

    constructor(
        private AuthorizationService: AuthorizationService,
        private Router: Router,
        private ValidatorService: ValidatorService,
        private ActivatedRoute: ActivatedRoute
    ) {
        this.form = new FormGroup({
            email    : new FormControl(''),
            token    : new FormControl(this.ActivatedRoute.snapshot.queryParams['token']),
            password : new FormControl(''),
            password_confirmation : new FormControl('')
        });

    }

    recovery() {

        this.loader.show();

        this.AuthorizationService.confirmRecovery(this.form.value).subscribe((res) => {
            this.Router.navigate(['start']);
        }, err => {
            this.loader.hide();

            if(err.status_code == 422) {
                return this.ValidatorService.addErrorToForm(this.form, err.errors);
            }
        });

    }
}
