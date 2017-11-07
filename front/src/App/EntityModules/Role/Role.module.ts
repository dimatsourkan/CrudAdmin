import { NgModule } from '@angular/core';
import { RoleService } from './Role.service';
import { RoleDataService } from "./Role.data";

@NgModule({
    imports: [
    ],
    providers: [
        RoleService,
        RoleDataService
    ],
    declarations: [],
    exports: []
})

export class RoleModule {

}
