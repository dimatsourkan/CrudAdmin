import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import {AuthorizationService} from "../Authorization.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable()
export class AccessToPasswordRecovery implements CanActivate {

    constructor( private Router : Router ) {}

    canActivate(route: ActivatedRouteSnapshot) : Observable<boolean>|Promise<boolean>|boolean {

        return new Promise((resolve) => {
            if(route.queryParams['token']) {
                return resolve(true);
            }
            else {
                this.Router.navigate(['/auth', 'login']);
                resolve(false);
            }
        });

    }

}
