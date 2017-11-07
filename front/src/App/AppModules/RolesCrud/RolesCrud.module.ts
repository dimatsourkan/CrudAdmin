import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {ROUTING} from "./RolesCrud.routing";
import {AppHttpModule} from "../../BaseModules/Http/Http.module";
import {ValidationModule} from "../../BaseModules/Validation/Validation.module";
import {ListComponent} from "./Components/List/List.component";
import {CrudPageModule} from "../../BaseModules/CrudPage/CrudPage.module";
import {SortingModule} from "../../Directives/Sorting/Sorting.module";
import {ButtonsModule} from "../../BaseModules/Buttons/Buttons.module";
import {ShowComponent} from "./Components/Show/Show.component";
import {LoaderModule} from "../../BaseModules/Loader/Loader.module";
import {EditComponent} from "./Components/AddEdit/Edit.component";
import {AddComponent} from "./Components/AddEdit/Add.component";
import {FormControlsModule} from "../../BaseModules/FormControls/FormControls.module";
import {RoleModule} from "../../EntityModules/Role/Role.module";

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormControlsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        AppHttpModule,
        TranslateModule,
        ValidationModule,
        CrudPageModule,
        SortingModule,
        ButtonsModule,
        LoaderModule,
        RoleModule,

        ROUTING
    ],
    declarations: [
        ListComponent,
        ShowComponent,
        EditComponent,
        AddComponent
    ],
    exports : [
    ],
    providers: []
})

export class RolesCrudModule {}
