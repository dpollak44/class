(function () {
    'use strict';

    const organism = {};
    const animal = Object.create(organism);
    const mammal = Object.create(animal);
    const dog = Object.create(mammal);

    animal.hasHair = false;
    mammal.hasHair = true;

    dog.speak = function () {
        console.log('Woof!');
    };

    dog.speak();

    const spot = Object.create(dog);
    spot.name = 'Spot';
    spot.color = 'white';
    spot.weight = 35;
    spot.breed = 'poodle';
    spot.owner = { first: 'Donald', last: 'Trump' };

    const fluffy = Object.create(spot);
    fluffy.name = 'Fluffy';
    fluffy.color = 'black';

    //fluffy.owner.first = 'Ivanka';
    fluffy.owner = { first: 'Ivanka', last: 'Trump' };
}());