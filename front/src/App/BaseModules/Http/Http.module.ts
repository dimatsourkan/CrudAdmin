import {NgModule} from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppHttpFactory } from './Http.facory';
import {HttpErrorModule} from "../HttpError/HttpError.module";
import {HttpErrorService} from "../HttpError/HttpError.service";


@NgModule({
    imports : [
        HttpErrorModule
    ],
    providers: [
        {
            provide: Http,
            useFactory: AppHttpFactory,
            deps: [ XHRBackend, RequestOptions, HttpErrorService ]
        }
    ],
})
export class AppHttpModule {}
