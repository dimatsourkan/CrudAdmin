export class FilterBuilder {
    private data: any;

    constructor(filter?: FilterBuilder) {
        if(filter instanceof FilterBuilder){
            this.data = filter.getJSON() || {};
        } else {
            this.data = {};
        }
    }

    getParams(key:string) {
        return this.data[key];
    };

    equal(key: string, value: string | number): FilterBuilder{
        this.data[key] = value;
        return this;
    };

    like(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: "like",
            value: value
        };
        return this;
    };

    not(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: "<>",
            value: value
        };
        return this;
    };

    greater(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: ">",
            value: value
        };
        return this;
    };

    less(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: "<",
            value: value
        };
        return this;
    };

    greaterOrEqual(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: ">=",
            value: value
        };
        return this;
    };

    lessOrEqual(key: string, value: string | number): FilterBuilder{
        this.data[key] = {
            operation: "<=",
            value: value
        };
        return this;
    };

    fromTo(key: string, valueFrom: string | number, valueTo: string | number): FilterBuilder{
        this.data[key] = {
            from: valueFrom,
            to: valueTo
        };
        return this;
    };

    to(key: string, value: string | number): FilterBuilder{
        if (!this.data[key]) {
            this.data[key] = {};
        }
        Object.assign(this.data[key], {to: value});
        return this;
    };

    in(key: string, value: any[]): FilterBuilder{
        this.data[key] = {
            operation: "in",
            value: value
        };
        return this;
    };

    notIn(key: string, value: any[]): FilterBuilder{
        this.data[key] = {
            operation: "not in",
            value: value
        };
        return this;
    };

    isNull(key: string): FilterBuilder{
        this.data[key] = {
            isNull: true
        };
        return this;
    };

    isNotNull(key: string): FilterBuilder{
        this.data[key] = {
            isNull: false
        };
        return this;
    };

    remove(key: string): FilterBuilder{
        if (this.data[key]) {
            delete this.data[key];
        }
        return this;
    };




    reset(): FilterBuilder{
        this.data = {};
        return this;
    };

    getJSON(): FilterBuilder{
        return this.data;
    };

    extendJSON(data: Object): FilterBuilder{
        Object.assign(this.data, data);
        return this;
    };

    extend(filter: FilterBuilder): FilterBuilder{
        if(filter instanceof FilterBuilder) {
            Object.assign(this.data, filter.getJSON());
        }
        return this;
    };

    toString(){
        return JSON.stringify(this.data);
    }

}
