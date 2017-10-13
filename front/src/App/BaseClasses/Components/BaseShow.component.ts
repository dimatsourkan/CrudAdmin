import {BaseCrudListComponent} from "./BaseList.component";
import {IModel} from "../Models/Base.model";
import {CRUDService} from "../Services/Crud.service";
import {DataService} from "../Services/Data.service";
import {ActivatedRoute} from "@angular/router";

/**
 * Базовый класс для просмотра
 */
export abstract class BaseCrudShowComponent<T extends IModel> extends BaseCrudListComponent<T> {

    private id : number;

    constructor(
        protected entity           : any,
        protected ComponentService : CRUDService<T>,
        protected DataService      : DataService<T>,
        protected ActivatedRoute   : ActivatedRoute
    ) {
        super(entity, ComponentService, DataService);
        this.id = this.ActivatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.onLoadData();
        this.get(this.id).subscribe();
    }

}