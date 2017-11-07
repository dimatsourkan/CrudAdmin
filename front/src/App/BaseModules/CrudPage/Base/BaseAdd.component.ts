import {BaseCrudListComponent} from "./BaseList.component";
import {IModel} from "../../../BaseClasses/Models/Base.model";
import {CRUDService} from "../../../BaseClasses/Services/Crud.service";
import {DataService} from "../../../BaseClasses/Services/Data.service";
import {FormGroup} from "@angular/forms";
import {ValidatorService} from "../../Validation/Validation.service";

/**
 * Базовый класс для добавления
 */
export abstract class BaseCrudAddComponent<T extends IModel> extends BaseCrudListComponent<T> {

    id : number = null;

    form : FormGroup;

    ValidatorService : ValidatorService;

    constructor(
        public entity           : any,
        public ComponentService : CRUDService<T>,
        public DataService      : DataService<T>
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
            if(err.code == 422) {
                this.ValidatorService.addErrorToForm(this.form, err.errors);
            }
        });
    }

}