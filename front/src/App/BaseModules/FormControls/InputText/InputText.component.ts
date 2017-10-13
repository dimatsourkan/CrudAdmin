import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormControlsComponent} from "../FormControls.component";

@Component({
    selector: 'input-text',
    templateUrl: './InputText.component.html',
    styleUrls:['./InputText.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})

export class InputTextComponent extends FormControlsComponent {}
