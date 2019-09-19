(function () {
    'use strict';

    function createCar(color) {
        return {
            color: color,
            go: function (speed) {
                this.speed = speed;
                console.log(`Now going at ${this.speed}`);
            },
            print: function () {
                console.log(`color is ${this.color} speed is ${this.speed}`);
            }
        };
    }

    const car1 = createCar('red');
    car1.go(50);
    car1.print();

    const car2 = createCar('blue');
    car2.go(80);
    car2.print();

    function beep() {
        console.log('Beep!!!');
    }
    car1.beep = beep;
    car2.beep = beep;
    car1.beep();
    car2.beep();

    /*const carFunctions = {
        go: function () {},
        print: function () {}
    };

    function createCar2(color) {
        const car = Object.create(carFunctions);
        car.color = color;
        return car;
    }*/

    function Vehicle(color) {
        //const this = Object.create(Vehicle.prototype);
        this.color = color;
        //return this;

        /*return {
            foo: 'bar'
        };*/
    }
    //Vehicle.foo = 'bar';
    //console.log(Vehicle.foo);

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Now going at ${this.speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`color is ${this.color} speed is ${this.speed}`);
    };

    Vehicle.prototype.clone = function () {
        const copy = new this.constructor(this.color);
        copy.speed = this.speed;
        return copy;
    };

    const vehicle1 = new Vehicle('red');
    vehicle1.go(50);
    vehicle1.print();

    const vehicle2 = new Vehicle('blue');
    vehicle2.go(80);
    vehicle2.print();

    vehicle2.vehicle2Thing = function () {
        console.log('Only vehicle 2 can do this');
    };

    vehicle2.vehicle2Thing();
    // vehicle1.vehicle2Thing();

    Vehicle.prototype.newVehicleThing = function () {
        console.log('something new added to vehicles');
    };

    vehicle2.newVehicleThing();
    vehicle1.newVehicleThing();

    function Plane(color) {
        //this.color = color;
        Vehicle.call(this, color);

        /*
        let someThingPrivate;
        this.somePlaneFunc = function () {
            console.log(someThingPrivate);
        }*/
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`Now FLYING at ${this.speed}`);
    };

    const plane1 = new Plane('yellow');
    plane1.go(700);
    plane1.print();

    const plane2 = new Plane('yellow');
    plane2.go(700);
    plane2.print();

    const vehicle3 = vehicle1.clone();
    vehicle3.print();
    vehicle3.go(100);

    const plane3 = plane1.clone();
    plane3.go(700);
    plane3.print();
}());