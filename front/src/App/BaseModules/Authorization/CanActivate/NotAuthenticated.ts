import {CanActivate, Router} from "@angular/router";
import {AuthorizationService} from "../Authorization.service";
import {Injectable} from "@angular/core";

@Injectable()
export class NotAuthenticated implements CanActivate {

    constructor(
        private AuthorizationService: AuthorizationService,
        private Router: Router
    ) {

    }

    canActivate(): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.AuthorizationService.isAuthenticated()) {
                this.Router.navigate(['/users']);
                return resolve(false);
            }
            return resolve(true);
        });
    }

}