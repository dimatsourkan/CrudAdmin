import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormControlsComponent} from "../FormControls.component";

@Component({
    selector: 'checkbox',
    templateUrl: './Checkbox.component.html',
    styleUrls:['./Checkbox.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})

export class CheckboxComponent extends FormControlsComponent {

    @Input()
    checked : boolean = false;

}
