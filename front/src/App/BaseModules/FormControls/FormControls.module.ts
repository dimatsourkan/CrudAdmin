import {NgModule} from "@angular/core";
import {InputTextComponent} from "./InputText/InputText.component";
import {ValidationModule} from "../Validation/Validation.module";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        ValidationModule
    ],
    declarations: [
        InputTextComponent
    ],
    exports: [
        InputTextComponent
    ]

})

export class FormControlsModule {}

