import { NgModule } from '@angular/core';
import { UserService } from './User.service';
import { UserDataService } from "./User.data";

@NgModule({
    imports: [
    ],
    providers: [
        UserService,
        UserDataService
    ],
    declarations: [],
    exports: []
})

export class UserModule {

}
