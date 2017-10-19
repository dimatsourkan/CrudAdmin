import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Notification} from "../../Notifications.model";
@Component({
    selector: 'notification',
    templateUrl : './Notification.component.html'
})

export class NotificationComponent implements OnInit{
    @Input() notification: Notification;
    @Input() timeout: number;

    @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        if(this.timeout){
            setTimeout(() => this.remove(), this.timeout);
        }
    }

    remove(){
        this.onRemove.emit();
    }
}
