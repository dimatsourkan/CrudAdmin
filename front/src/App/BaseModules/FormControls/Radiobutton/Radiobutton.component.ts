import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormControlsComponent} from "../FormControls.component";

@Component({
    selector: 'radio',
    templateUrl: './Radiobutton.component.html',
    styleUrls:['./Radiobutton.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})

export class RadioComponent extends FormControlsComponent {

    @Input()
    name : string = '';

    @Input()
    checked : boolean = false;

}
