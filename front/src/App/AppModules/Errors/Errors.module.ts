import { NgModule } from '@angular/core';
import { Error403Component } from "./Components/403/403.component";
import { ROUTING } from "./Errors.routing";
import {Error404Component} from "./Components/404/404.component";

@NgModule({
    imports: [
        ROUTING
    ],
    declarations: [
        Error403Component,
        Error404Component
    ],
    exports : [
    ],
    providers: []
})

export class ErrorsModule {}
