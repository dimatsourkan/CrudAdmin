import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormControlsComponent} from "../FormControls.component";

@Component({
    selector: 'input-number',
    templateUrl: './InputNumber.component.html',
    styleUrls:['./InputNumber.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputNumberComponent),
            multi: true
        }
    ]
})

export class InputNumberComponent extends FormControlsComponent {

    private Keys : number[] = [8, 13, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

    onKeyPress(target) {
        let key = target.keyCode || target.which;
        if(!this.checkKey(key)) return false;
    }

    checkKey(key : number) {
        return this.Keys.indexOf(key) >= 0;
    }
}
