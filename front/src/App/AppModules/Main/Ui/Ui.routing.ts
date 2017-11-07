import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from "./Components/Forms/Forms.component";

const routes: Routes = [
    {
        path: '',
        component: FormsComponent
    }
];

export const ROUTING = RouterModule.forChild(routes);
