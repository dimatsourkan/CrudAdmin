import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {AuthorizationService} from "../../BaseModules/Authorization/Authorization.service";
import {UserDataService} from "../../EntityModules/User/User.data";

@Component({
    selector: 'header',
    templateUrl: './Header.component.html',
    styleUrls: ['./Header.component.less']
})

export class HeaderComponent {


    constructor(
        private AuthorizationService: AuthorizationService,
        public  UserDataService: UserDataService,
        private Router: Router
    ) {}

    logout() {
        this.AuthorizationService.logout();
        this.Router.navigate(['login']);
    }
}
