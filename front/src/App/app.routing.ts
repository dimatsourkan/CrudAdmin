import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from "./Components/Wrapper/wrapper.component";

const routes: Routes = [

    {
        path: 'auth',
        loadChildren: './AppModules/Main/AppAuthorization/AppAuthorization.module.ts#AppAuthorizationModule'
    },

    {
        path: 'ui',
        loadChildren: './AppModules/Main/Ui/Ui.module.ts#UiModule'
    },

    {
        path: 'error',
        loadChildren: './AppModules/Main/Errors/Errors.module.ts#ErrorsModule'
    },

    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'users',
                loadChildren: './AppModules/UsersCrud/UsersCrud.module.ts#UsersCrudModule'
            },

            {
                path: 'roles',
                loadChildren: './AppModules/RolesCrud/RolesCrud.module.ts#RolesCrudModule'
            },
        ]
    },

    {
        path: '**',
        redirectTo: '/error/404'
    }
];

export const ROUTING = RouterModule.forRoot(routes);
