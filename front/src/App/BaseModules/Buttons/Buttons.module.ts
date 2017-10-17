import {NgModule} from "@angular/core";
import {DeleteBtnComponent} from "./Delete/Delete.component";
import {ShowBtnComponent} from "./Show/Show.component";
import {EditBtnComponent} from "./Edit/Edit.component";
import {SuccessBtnComponent} from "./Success/Success.component";
import {PrimaryBtnComponent} from "./Primary/Primary.component";

@NgModule({
    imports: [

    ],
    declarations: [
        PrimaryBtnComponent,
        SuccessBtnComponent,
        DeleteBtnComponent,
        ShowBtnComponent,
        EditBtnComponent
    ],
    exports: [
        PrimaryBtnComponent,
        SuccessBtnComponent,
        DeleteBtnComponent,
        ShowBtnComponent,
        EditBtnComponent
    ]

})

export class ButtonsModule {}

