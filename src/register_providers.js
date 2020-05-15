
import {VirtualModel, VirtualModelManager, MemoryModelProvider} from 'js-virtual-model';
import Car from "./models/Car";
import CustomProvider from "./providers/CustomProvider";

let provider = new CustomProvider();
provider.memoryStorage = {
    Car: [
        {
            'id': 1,
            'name': 'БМВ',
        },
        {
            'id': 2,
            'name': 'Hyundai',
        },
        {
            'id': 3,
            'name': 'Honda',
        },
        {
            'id': 4,
            'name': 'Opel',
        },
    ]
};

VirtualModelManager.addProvider(provider);