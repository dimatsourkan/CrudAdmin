import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ValidationModule } from '../../BaseModules/Validation/Validation.module';
import { AppHttpModule } from '../../BaseModules/Http/Http.module';
import { LoginComponent } from './Components/Login/Login.component';
import { RecoveringEmailComponent } from './Components/Recovering-email/Recovering-email.component';
import { RecoveringPassComponent } from './Components/Recovering-pass/Recovering-pass.component';
import { LoaderModule } from '../../BaseModules/Loader/Loader.module';
import { UserModule } from '../../EntityModules/User/User.module';
import {TranslateModule} from "@ngx-translate/core";
import {ROUTING} from "./AppAuthorization.routing";

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
        UserModule,

        ROUTING
    ],
    declarations: [
        RecoveringEmailComponent,
        RecoveringPassComponent,
        LoginComponent
    ],
    exports : [
    ],
    providers: []
})

export class AppAuthorizationModule {}
