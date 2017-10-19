import {Input, OnInit} from "@angular/core";
import {ControlValueAccessor, FormGroup} from "@angular/forms";

export class FormControlsComponent implements ControlValueAccessor, OnInit {

    @Input()
    formControlName : any;

    @Input()
    value : any = '';

    @Input()
    form : FormGroup;

    writeValue(value: any) {
        if (value !== undefined) {
            this.value = value;
        }
    }

    propagateChange = (_: any) => {};

    registerOnChange(fn : any) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    ngOnInit() {
        console.log('formControlName : ', this.formControlName);
    }
}