import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {TokenService} from "../../BaseClasses/Services/Token.service";
import {NOTIFICATION_TYPE} from "../Notifications/Notifications.const";
import {NotificationsService} from "../Notifications/Notifications.service";
import {Notification} from "../Notifications/Notifications.model";

@Injectable()
export class HttpErrorService {

    constructor(
        private NotificationsService : NotificationsService,
        private token                : TokenService,
        private injector             : Injector
    ) {}

    setError(error : any) {
        console.log(error);
        let router = this.injector.get(Router);
        switch(error.status) {
            case 401 : this.token.resetToken(); router.navigate(['login']); break;
            case 404 : this.pushNotification({
                title : 404,
                statusText : 'Запрашиваемый адрес не найден'
            }); break;
            case 409 : this.pushNotification({
                title : 409,
                statusText : ''
            }); break;
            case 403 : this.pushNotification({
                title : 403,
                statusText : 'Действие запрещено'
            }); break;
            case 500 : this.pushNotification(error); break;
            case 502  : this.pushNotification({
                title : 502,
                statusText : 'Время ожидания по запросу истекло, сервер недоступен'
            }); break;
            case -1  : this.pushNotification({
                title : 408,
                statusText : 'Время ожидания по запросу истекло, сервер недоступен'
            }); break;
        }

    }

    private pushNotification(error:any) {
        let title   : string = error.title;
        let message : string = error.statusText ? error.statusText : 'Server error';
        this.NotificationsService.push(
            new Notification({
                message : message,
                title   : title,
                time    : 5000,
                type    : NOTIFICATION_TYPE.ERROR
            })
        );
    }
}
