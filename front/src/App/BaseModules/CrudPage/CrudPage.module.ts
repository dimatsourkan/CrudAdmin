import {NgModule}       from "@angular/core";
import {CommonModule} from "@angular/common";
import {CrudListComponent} from './Components/List/List.component';
import {CrudShowComponent} from "./Components/Show/Show.component";
import {CrudAddEditComponent} from "./Components/AddEdit/AddEdit.component";
import {PaginationModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-modal";
import {ButtonsModule} from "../Buttons/Buttons.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        ButtonsModule,
        RouterModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        CrudAddEditComponent,
        CrudListComponent,
        CrudShowComponent
    ],
    exports: [
        CrudAddEditComponent,
        CrudListComponent,
        CrudShowComponent
    ]

})
export class CrudPageModule {}

