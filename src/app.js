

import Car from "./models/Car";
import Feedback from "./models/Feedback";
import Vue from 'vue';

require('./register_providers');

let cars = Car.call('many', {});
console.log('cars = ', cars);

let feedback = new Feedback();
feedback.setAttributes({
    name: 'Евгений',
    email: 'kosuha606@gmail.com',
    phone: '999',
});

Feedback.call('save', feedback);

const feedbacks = Feedback.call('many', {});
console.log('feedbacks=', feedbacks);


const app = new Vue({
    el: '#app',
    computed: {
    },
    data() {
        return {
            counter: 0,
            hello: 'world',
            newCarName: '',
        }
    },
    methods: {
        cars() {
            return Car.call('many', {});
        },
        addCar() {
            let car = new Car();
            car.setAttributes({
                id: 0,
                name: this.newCarName
            });
            Car.call('save', car);
            this.$forceUpdate();
            this.newCarName = '';
            this.counter++;
        }
    }
});