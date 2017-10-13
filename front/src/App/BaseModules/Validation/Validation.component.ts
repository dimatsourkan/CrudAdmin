import {Component, Input, OnChanges} from "@angular/core";
import validations from "./validations";

interface ServerError {
    error : string;
    values : any[];
}

@Component({
    selector: 'validation-message',
    templateUrl: './Validation.component.html',
    styleUrls : ['./Validation.component.less']
})

export class ValidationComponent implements OnChanges {

    @Input() private name      : string;
    @Input() private date      : string;
    @Input() private errors    : any;
    @Input() private nested    : string;
    @Input() private format    : string = 'H:mm';

    fullErrors : string[] = [];

    errorTexts : any = validations;

    buildErrors() {
        this.fullErrors = [];

        if(this.errors && this.errors.server) {
            this.fullErrors = this.errors.server.map((error : ServerError) => {
                return this.parseError(this.errorTexts[error.error] || 'Undefined Error', error);
            })
        }
    }

    parseError(err : any, serverErr : ServerError) {

        if(this.nested && err[this.nested]) {
            err = err[this.nested];
        }

        if(typeof err == 'object') {
            return 'Error is a Object, add the nested attribute';
        }

        err = err.replace('${name}', this.name);
        err = err.replace('${date}', this.date);
        err = err.replace('${'+serverErr.error+'}', serverErr.values[0]);

        return err;
    }

    ngOnChanges() {
        this.buildErrors();
    }

}
