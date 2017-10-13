import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";


@Injectable()
export class ValidatorService {

    clearValidation(form : FormGroup) {
        for(let key in form.controls) {
            form.controls[key].setErrors(null);
        }
    }

    addErrorToForm(form: FormGroup, errors: any){

        if(!form.controls) {
            return;
        }

        this.clearValidation(form);

        Object.keys(errors).forEach( key => {

            if(form.controls[key]) {

                form.controls[key].setErrors({ server : errors[key] });

            }

        });

    }

}
