import {VirtualModel} from 'js-virtual-model';

export default class Feedback extends VirtualModel
{
    constructor() {
        super();
        this.attributes = {
            name: '',
            email: '',
            phone: '',
        }
    }
}