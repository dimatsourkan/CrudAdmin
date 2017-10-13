import {CanActivate, Router} from "@angular/router";
import {AuthorizationService} from "../Authorization.service";
import {Injectable} from "@angular/core";


@Injectable()
export class IsAuthenticated implements CanActivate {

    constructor(
        private AuthorizationService : AuthorizationService,
        private Router: Router
    ) {

    }

    canActivate(): Promise<boolean> {
        return new Promise((resolve) => {
            if (this.AuthorizationService.isAuthenticated()) {
                return resolve(true);
            }
            this.Router.navigate(['/auth/login']);
            return resolve(false);
        });
    }

}