import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NotificationsComponent} from "./Components/List/List.component";
import {NotificationsService} from "./Notifications.service";
import {NotificationComponent} from "./Components/Notification/Notification.component";
@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        NotificationsService
    ],
    declarations: [
        NotificationsComponent,
        NotificationComponent
    ],
    exports: [
        NotificationsComponent
    ]
})
export class NotificationsModule {

}
