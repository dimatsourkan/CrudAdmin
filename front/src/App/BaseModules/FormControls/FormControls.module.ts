import {NgModule} from "@angular/core";
import {InputTextComponent} from "./InputText/InputText.component";
import {ValidationModule} from "../Validation/Validation.module";
import {CommonModule} from "@angular/common";
import {InputNumberComponent} from "./InputNumber/InputNumber.component";
import {TextAreaComponent} from "./TextArea/TextArea.component";
import {AutoSizeModule} from "../../Directives/Autosize/Autosize.module";
import {ChosenComponent} from "./Chosen/Chosen.component";
import {SelectChosenDirective} from "./Chosen/Chosen.directive";
import {InputFileComponent} from "./InputFile/InputFile.component";
import {CheckboxComponent} from "./Checkbox/Checkbox.component";
import {RadioComponent} from "./Radiobutton/Radiobutton.component";

@NgModule({
    imports: [
        CommonModule,
        AutoSizeModule,
        ValidationModule
    ],
    declarations: [
        RadioComponent,
        ChosenComponent,
        TextAreaComponent,
        CheckboxComponent,
        InputFileComponent,
        InputTextComponent,
        InputNumberComponent,
        SelectChosenDirective
    ],
    exports: [
        RadioComponent,
        ChosenComponent,
        CheckboxComponent,
        TextAreaComponent,
        InputFileComponent,
        InputTextComponent,
        InputNumberComponent
    ]

})

export class FormControlsModule {}

