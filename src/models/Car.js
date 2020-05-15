import {VirtualModel} from 'js-virtual-model';

export default class Car extends VirtualModel
{
    constructor() {
        super();
        this.attributes = {
            id: '',
            name: '',
        }
    }
}