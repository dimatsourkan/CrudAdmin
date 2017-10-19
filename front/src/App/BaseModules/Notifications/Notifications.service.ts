import {Injectable} from "@angular/core";
import {Notification} from "./Notifications.model";


@Injectable()
export class NotificationsService{
    notificationList: Notification[] = [];

    push(notification: Notification){
        this.notificationList.push(notification);
    }

    removeByIndex(index: number){
        this.notificationList.splice(index, 1);
    }
}
