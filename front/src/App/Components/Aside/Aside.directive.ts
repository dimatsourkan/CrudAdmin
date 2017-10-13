import {Directive, ElementRef, AfterViewInit} from "@angular/core";
import * as $ from 'jquery';

@Directive({
    selector : '[toggleNav]'
})

export class NavigationDirective implements AfterViewInit {

    el : any;

    constructor(
        private elem : ElementRef
    ) {
        this.el = elem.nativeElement;
    }

    ngAfterViewInit() {
        $(this.el ).click(() => {
            $("body").toggleClass("mini-navbar");
            SmoothlyMenu();
        });
    }

}

function SmoothlyMenu() {

    let $body = $('body');
    let $logo = $('#logo');
    let $side = $('#side-menu');

    if (!$body.hasClass('mini-navbar') || $body.hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $side.hide();
        $logo.hide();
        // For smoothly turn on menu
        setTimeout(() => {
            $side.fadeIn(400);
            $logo.fadeIn(400);
        }, 200);

    } else if ($body.hasClass('fixed-sidebar')) {

        $side.hide();
        $logo.hide();
        setTimeout(() => {
            $side.fadeIn(400);
            $logo.fadeIn(400);
        }, 100);

    } else {

        $logo.hide();
        // Remove all inline style from jquery fadeIn function to reset menu state
        $side.removeAttr('style');

    }

}