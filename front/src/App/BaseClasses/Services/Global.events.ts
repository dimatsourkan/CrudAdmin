import {EventEmitter, Injectable} from "@angular/core";

let instance = null;

export class GlobalEvents {

    public OnRequestEnd : EventEmitter<any> = new EventEmitter<any>();

    constructor() {

        if(!instance){
            instance = this;
        }

        return instance;
    }
}