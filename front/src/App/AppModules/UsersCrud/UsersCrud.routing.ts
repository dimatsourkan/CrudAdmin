import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./Components/List/List.component";
import {IsAuthenticated} from "../../BaseModules/Authorization/CanActivate/IsAuthenticated";

const routes: Routes = [

    {
        path: '',
        component: ListComponent,
        canActivate : [ IsAuthenticated ],
        data : {
            title : 'Users'
        }
    }
];

export const ROUTING = RouterModule.forChild(routes);
