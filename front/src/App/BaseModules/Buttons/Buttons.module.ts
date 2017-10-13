import {NgModule} from "@angular/core";
import {DeleteBtnComponent} from "./Delete/Delete.component";
import {ShowBtnComponent} from "./Show/Show.component";
import {EditBtnComponent} from "./Edit/Edit.component";
import {SuccessBtnComponent} from "./Success/Success.component";

@NgModule({
    imports: [

    ],
    declarations: [
        SuccessBtnComponent,
        DeleteBtnComponent,
        ShowBtnComponent,
        EditBtnComponent
    ],
    exports: [
        SuccessBtnComponent,
        DeleteBtnComponent,
        ShowBtnComponent,
        EditBtnComponent
    ]

})

export class ButtonsModule {}

