import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./Components/List/List.component";
import {IsAuthenticated} from "../../BaseModules/Authorization/CanActivate/IsAuthenticated";
import {ShowComponent} from "./Components/Show/Show.component";
import {EditComponent} from "./Components/AddEdit/Edit.component";
import {AddComponent} from "./Components/AddEdit/Add.component";

const routes: Routes = [

    {
        path: '',
        component: ListComponent,
        canActivate : [ IsAuthenticated ]
    },

    {
        path: 'add',
        component: AddComponent,
        canActivate : [ IsAuthenticated ]
    },

    {
        path: ':id',
        component: ShowComponent,
        canActivate : [ IsAuthenticated ]
    },

    {
        path: ':id/edit',
        component: EditComponent,
        canActivate : [ IsAuthenticated ]
    }
];

export const ROUTING = RouterModule.forChild(routes);
