import {Directive, ElementRef, Input, OnChanges} from "@angular/core";
import {ControlValueAccessor} from "@angular/forms";
import * as $ from 'jquery';

require('./../../../../../node_modules/chosen-js/chosen.jquery.js');

@Directive({
    selector : '[chosen]',
    host: {
        '(ngModelChange)' : 'onSelectChange($event)'
    }
})

export class SelectChosenDirective implements ControlValueAccessor, OnChanges {

    @Input() show : boolean;
    @Input() data : any;

    private value : string;
    $el : any;

    constructor(private el: ElementRef) {

        this.$el = $(el.nativeElement);

    }

    ngOnChanges() {
        this.$el.trigger("chosen:updated");
    }

    ngAfterViewInit() {

        this.$el.chosen({
            width: '100%',
            allow_single_deselect: true
        });

        this.onchange();

        if(this.show) {
            setTimeout(() => {
                this.$el.trigger("chosen:open");
            })
        }

    }

    onSelectChange(data: any){
        this.value = data;
        this.$el.trigger('chosen:updated');
    }

    onchange() {
        this.el.nativeElement.onchange = (e : any) => {
            if(!e.returnValue) {
                this.onChange(e.target.value);
                let customEvent = document.createEvent('Event');
                customEvent.initEvent('change', true, true);
                this.el.nativeElement.dispatchEvent(customEvent);

            }
        };
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
