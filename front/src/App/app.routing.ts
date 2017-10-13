let helpers = require('./../../config/helpers');
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from "./Components/Wrapper/wrapper.component";

const routes: Routes = [

    {
        path: 'auth',
        loadChildren: helpers.root('AppModules/AppAuthorization/AppAuthorization.module.ts#AppAuthorizationModule')
    },

    {
        path: 'error',
        loadChildren: helpers.root('AppModules/Errors/Errors.module.ts#ErrorsModule')
    },

    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'users',
                loadChildren: helpers.root('AppModules/UsersCrud/UsersCrud.module.ts#UsersCrudModule')
            }
        ]
    },

    {
        path: '**',
        redirectTo: '/error/404'
    }
];

export const ROUTING = RouterModule.forRoot(routes);
