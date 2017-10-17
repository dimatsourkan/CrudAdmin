import {Directive, ElementRef, forwardRef, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {DATE_FORMAT} from "../../../constants";
import * as $ from 'jquery';
require('./../../../../../node_modules/bootstrap-datepicker');

@Directive({
    selector: '[datepicker]',
    providers: [{
        provide: NG_VALUE_ACCESSOR, useExisting:
            forwardRef(() => DatepickerDirective),
        multi: true
    }]
})

export class DatepickerDirective implements ControlValueAccessor {

    private $el : any = null;
    private value : string;
    private options: any;

    @Input() format : string = null;

    constructor(private el: ElementRef) {

        this.options = {
            format: this.format || DATE_FORMAT,
            language : 'ru'
        };

        this.$el = $(el.nativeElement);
    }

    ngAfterViewInit() {
        this.$el.datepicker(this.options);

        this.$el.on('dp.change', (e : any) => {
            this.onChange(e.target.value);
        });
    }

    onChange: Function = () => {};

    onTouched: Function = () => {};

    writeValue(val: string) : void {
        this.value = val;
    }

    registerOnChange(fn: Function): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onTouched = fn;
    }

}
