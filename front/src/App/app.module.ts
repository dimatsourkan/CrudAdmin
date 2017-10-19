import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { TokenService } from './BaseClasses/Services/Token.service';
import { WrapperComponent } from './Components/Wrapper/wrapper.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { NavigationComponent } from './Components/Aside/Aside.component';
import { NavigationDirective } from './Components/Aside/Aside.directive';
import { LoaderModule } from "./BaseModules/Loader/Loader.module";
import { DropdownModule } from "ngx-dropdown";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AuthorizationModule} from "./BaseModules/Authorization/Authorization.module";
import {AppAuthorizationModule} from "./AppModules/AppAuthorization/AppAuthorization.module";
import {NotificationsModule} from "./BaseModules/Notifications/Notifications.module";

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './Lang/', '.json');
}

@NgModule({
    imports: [
        NotificationsModule,
        DropdownModule,
        BrowserModule,
        LoaderModule,
        HttpModule,
        ROUTING,

        AppAuthorizationModule,
        AuthorizationModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],

    declarations: [
        NavigationDirective,
        AppComponent,
        WrapperComponent,
        HeaderComponent,
        NavigationComponent
    ],

    providers: [
        TokenService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

    constructor() { }
}