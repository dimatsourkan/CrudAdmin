import { NgModule } from '@angular/core';
import { ROUTING } from "./Ui.routing";
import { FormsComponent } from "./Components/Forms/Forms.component";
import {FormControlsModule} from "../../BaseModules/FormControls/FormControls.module";

@NgModule({
    imports: [
        ROUTING,
        FormControlsModule
    ],
    declarations: [
        FormsComponent
    ],
    exports : [
    ],
    providers: []
})

export class UiModule {}
