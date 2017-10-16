import {BaseCrudListComponent} from "./BaseList.component";
import {IModel} from "../Models/Base.model";
import {CRUDService} from "../Services/Crud.service";
import {DataService} from "../Services/Data.service";
import {FormGroup} from "@angular/forms";
import {ValidatorService} from "../../BaseModules/Validation/Validation.service";

/**
 * Базовый класс для добавления
 */
export abstract class BaseCrudAddComponent<T extends IModel> extends BaseCrudListComponent<T> {

    form : FormGroup;

    ValidatorService : ValidatorService;

    constructor(
        protected entity           : any,
        protected ComponentService : CRUDService<T>,
        protected DataService      : DataService<T>
    ) {
        super(entity, ComponentService, DataService);
        this.ValidatorService = new ValidatorService();
    }

    ngOnInit() {
        this.onLoadData();
    }

    submit() {
        let item = new this.Entity(this.form.value);
        this.save(item).subscribe(() => {}, err => {
            this.ValidatorService.addErrorToForm(this.form, err.errors);
        });
    }

}