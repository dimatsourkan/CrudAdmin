import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {ROUTING} from "./UsersCrud.routing";
import {AppHttpModule} from "../../BaseModules/Http/Http.module";
import {ValidationModule} from "../../BaseModules/Validation/Validation.module";
import {LoaderModule} from "../../BaseModules/Loader/Loader.module";
import {UserModule} from "../../BaseModules/User/User.module";
import {ListComponent} from "./Components/List/List.component";
import {CrudPageModule} from "../../BaseModules/CrudPage/CrudPage.module";
import {SortingModule} from "../../Directives/Sorting/Sorting.module";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        AppHttpModule,
        TranslateModule,
        ValidationModule,
        LoaderModule,
        CrudPageModule,
        SortingModule,
        UserModule,

        ROUTING
    ],
    declarations: [
        ListComponent
    ],
    exports : [
    ],
    providers: []
})

export class UsersCrudModule {}
