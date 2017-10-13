import {Component, Input, ViewEncapsulation, EventEmitter, Output, ViewChild} from '@angular/core';
import {IPagination} from "../../../../BaseClasses/Models/Pagination.model";

@Component({
    selector: 'crud-list',
    templateUrl: 'List.component.html',
    styleUrls:['./List.component.less'],
    encapsulation : ViewEncapsulation.None,
})

export class CrudListComponent {

    /**
     * Хранит имя для удаляемой модели
     */
    private deleteItemName : string;

    /**
     * Заголовок таблицы
     */
    @Input()
    title : string;

    /**
     * Объект пагинации, если его не передать пагинация не будет отображаться
     */
    @Input()
    pagination : IPagination;

    /**
     * Событие на изменение состояния пагинатора
     * @type {EventEmitter<IPagination>}
     */
    @Output()
    pageChanged : EventEmitter<IPagination> = new EventEmitter<IPagination>();

    /**
     * Событие на изменение состояния пагинатора
     * @type {EventEmitter<IPagination>}
     */
    @Output()
    onDelete : EventEmitter<any> = new EventEmitter<any>();

    /**
     * Объект модалки удаления
     */
    @ViewChild('deleteModal') private deleteModal : any;

    /**
     * Показывает попап для удаления
     * @param {string} name
     */
    showDelete(name : string) {
        this.deleteItemName = name;
        this.deleteModal.open();
    }

    /**
     * Скрывает попап для удаления
     */
    hideDelete() {
        this.deleteModal.close();
    }

    /**
     * Вызывается при изменении страницы пагинатора
     * @param e - Данные которые отдает плагин
     */
    changePage(e : any) {
        if(this.pagination.current_page != e.page) {
            this.pagination.current_page = e.page;
            this.pageChanged.emit();
        }
    }

}
