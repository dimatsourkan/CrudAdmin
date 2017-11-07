import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/Login/Login.component";
import {NotAuthenticated} from "../../../BaseModules/Authorization/CanActivate/NotAuthenticated";
import {RecoveringEmailComponent} from "./Components/Recovering-email/Recovering-email.component";
import {RecoveringPassComponent} from "./Components/Recovering-pass/Recovering-pass.component";
import {AccessToPasswordRecovery} from "../../../BaseModules/Authorization/CanActivate/AccessToPasswordRecovery";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate : [ NotAuthenticated ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate : [ NotAuthenticated ]
    },
    {
        path: 'recovery-email',
        component : RecoveringEmailComponent,
        canActivate : [ NotAuthenticated ]
    },
    {
        path: 'recovery-pass',
        component : RecoveringPassComponent,
        canActivate : [ NotAuthenticated, AccessToPasswordRecovery ]
    }
];

export const ROUTING = RouterModule.forChild(routes);
