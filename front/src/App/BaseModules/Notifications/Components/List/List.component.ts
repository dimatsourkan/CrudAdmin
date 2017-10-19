import {Component} from "@angular/core";
import {NotificationsService} from "../../Notifications.service";

@Component({
    selector: 'notification-list',
    templateUrl : './List.component.html'
})

export class NotificationsComponent {

    constructor(public NotificationsService: NotificationsService) {}

    remove(index: number){
        this.NotificationsService.removeByIndex(index);
    }
}
