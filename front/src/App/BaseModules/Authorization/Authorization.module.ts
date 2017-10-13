import { NgModule } from '@angular/core';
import { AuthorizationService } from './Authorization.service';
import {IsAuthenticated} from "./CanActivate/IsAuthenticated";
import {NotAuthenticated} from "./CanActivate/NotAuthenticated";
import {AccessToPasswordRecovery} from "./CanActivate/AccessToPasswordRecovery";

@NgModule({
    imports: [
    ],
    declarations: [
    ],
    exports : [
    ],
    providers: [
        AuthorizationService,
        IsAuthenticated,
        NotAuthenticated,
        AccessToPasswordRecovery
    ]
})

export class AuthorizationModule {}
