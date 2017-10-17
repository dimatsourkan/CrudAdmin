import {Component, forwardRef, Input, ViewEncapsulation} from '@angular/core';
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {FormControlsComponent} from "../FormControls.component";

@Component({
    selector: 'chosen',
    templateUrl: './Chosen.component.html',
    styleUrls:['./Chosen.component.less'],
    encapsulation : ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ChosenComponent),
            multi: true
        }
    ]
})

export class ChosenComponent extends FormControlsComponent {

    @Input()
    data : any[];

    @Input()
    label : any = '';

    @Input()
    multiple : boolean = false;

}
