import {NgModule}       from "@angular/core";
import {CommonModule} from "@angular/common";
import {CrudListComponent} from './Components/List/List.component';
import {CrudShowComponent} from "./Components/Show/Show.component";
import {CrudEditComponent} from "./Components/Edit/Edit.component";
import {PaginationModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngx-modal";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ModalModule,
        PaginationModule.forRoot()
    ],
    declarations: [
        CrudListComponent,
        CrudShowComponent,
        CrudEditComponent
    ],
    exports: [
        CrudListComponent,
        CrudShowComponent,
        CrudEditComponent
    ]

})
export class CrudPageModule {}

