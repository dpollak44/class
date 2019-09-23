(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`Now going ${this.speed}`);
        }

        print() {
            console.log(`color: ${this.color} speed: ${this.speed}`);
        }
    }

    const v1 = new Vehicle('blue');
    v1.go(100);
    v1.print();

    // const v1go = v1.go;
    // v1go();

    // window.v1 = v1;
    class Plane extends Vehicle {
        go(speed) {
            this.speed = speed;
            console.log(`Now FLYING ${this.speed}`);
        }
    }

    const p1 = new Plane('yellow');
    p1.go('1000');
    p1.print();

    ////////////
    const vehiclePrototype = {
        // go: function (speed) {
        go(speed) {
            this.speed = speed;
            console.log(`Now going ${this.speed}`);
        },
        print() {
            console.log(`color: ${this.color} speed: ${this.speed}`);
        }
    };

    function vehicleFactory(color) {
        const v = Object.create(vehiclePrototype);
        v.color = color;
        return v;
    }

    const v2 = vehicleFactory('blue');
}());