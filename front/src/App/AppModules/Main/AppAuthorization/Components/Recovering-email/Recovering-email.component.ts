import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../../../BaseModules/Validation/Validation.service';
import {AuthorizationService} from "../../../../../BaseModules/Authorization/Authorization.service";

@Component({
    selector: 'recovering-email',
    templateUrl: './Recovering-email.component.html'
})

export class RecoveringEmailComponent {

    form: FormGroup;

    @ViewChild('loader') private loader: any;

    constructor(
        private AuthorizationService: AuthorizationService,
        private ValidatorService: ValidatorService
    ) {
        this.form = new FormGroup({
            email : new FormControl('')
        });

    }

    recovery() {
        this.loader.show();
        this.AuthorizationService.recoveryEmail(this.form.value).subscribe(() => {
            this.loader.hide();
        }, err => {
            this.loader.hide();

            if(err.status_code == 422) {
                this.ValidatorService.addErrorToForm(this.form, err.errors);
            }

        });
    }
}
