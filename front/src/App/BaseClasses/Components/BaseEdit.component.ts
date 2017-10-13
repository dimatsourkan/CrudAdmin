import {BaseCrudListComponent} from "./BaseList.component";
import {IModel} from "../Models/Base.model";
import {CRUDService} from "../Services/Crud.service";
import {DataService} from "../Services/Data.service";
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";

/**
 * Базовый класс для редактирования
 */
export abstract class BaseCrudEditComponent<T extends IModel> extends BaseCrudListComponent<T> {

    id : number;

    form : FormGroup;

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
        this.get(this.id).subscribe(() => {
            this.patchFormValues(this.DataService.item);
        });
    }

    protected patchFormValues(data : T) {
        this.form.patchValue(data);
    }

    submit() {
        let item = this.DataService.getUpdatedItem(new this.Entity(this.DataService.item), this.form.value);
        console.log(item);
    }

}