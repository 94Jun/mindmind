import { makeObservable } from 'mobx';
export default class Program {
    public test = true;
    constructor() {
        makeObservable(this, {});
    }
}
