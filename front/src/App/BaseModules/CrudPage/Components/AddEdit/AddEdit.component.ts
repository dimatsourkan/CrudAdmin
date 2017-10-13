import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector : 'crud-add-edit',
    styleUrls : ['./../../CrudPage.component.less', './AddEdit.component.less'],
    templateUrl : './AddEdit.component.html',
    encapsulation : ViewEncapsulation.None,
})

export class CrudAddEditComponent {

    /**
     * Заголовок таблицы
     */
    @Input()
    title : string;

}
