import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./Components/404/404.component";
import {Error403Component} from "./Components/403/403.component";

const routes: Routes = [
    {
        path: '',
        component: Error404Component
    },
    {
        path: '404',
        component: Error404Component
    },
    {
        path: '403',
        component : Error403Component
    }
];

export const ROUTING = RouterModule.forChild(routes);
