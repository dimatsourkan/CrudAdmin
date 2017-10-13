
export interface IModel {
    id: number|string;
}

export class BaseModel implements IModel {
    id: number|string;

    constructor(model ?: any) {
        if (model) {
            this.id = model.id;
        }
    }
}