import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector : 'crud-show',
    styleUrls : ['./../../CrudPage.component.less', './Show.component.less'],
    templateUrl : './Show.component.html',
    encapsulation : ViewEncapsulation.None,
})

export class CrudShowComponent {

    /**
     * Заголовок таблицы
     */
    @Input()
    title : string;

}
