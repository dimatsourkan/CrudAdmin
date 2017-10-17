import {Directive, ElementRef, AfterViewInit, Output, EventEmitter} from "@angular/core";
let autosize: any = require('autosize/dist/autosize.js');

@Directive({
    selector : '[autosize]',
    host: {
        '(ngModelChange)' : 'onChangeArea($event)'
    }
})

export class AutoSizeDirective implements AfterViewInit {

    el : any;

    @Output() init : EventEmitter<any> = new EventEmitter<any>();

    constructor(private elem : ElementRef) {
        this.el = elem.nativeElement;
    }

    onChangeArea() {
        autosize.update(this.el);
    }

    ngAfterViewInit() {
        autosize(this.el);
    }

}
