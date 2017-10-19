import {Component, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "./EntityModules/User/User.service";
import {AuthorizationService} from "./BaseModules/Authorization/Authorization.service";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.less'
    ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    constructor(
        translate: TranslateService,
        private UserService : UserService,
        private AuthorizationService : AuthorizationService
    ) {

        this.getUserData();
        translate.setDefaultLang('en');
        translate.use('en');

    }

    getUserData() {
        if(this.AuthorizationService.isAuthenticated()) {
            this.UserService.getProfile().subscribe();
        }
    }
}
