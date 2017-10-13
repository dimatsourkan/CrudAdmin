import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { AppHttpFactory } from './Http.facory';


@NgModule({
    providers: [
        {
            provide: Http,
            useFactory: AppHttpFactory,
            deps: [ XHRBackend, RequestOptions ]
        }
    ],
})
export class AppHttpModule {}
