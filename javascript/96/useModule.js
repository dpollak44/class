const myModule = require('./modules');
myModule.sayHello();

//const sayHello = require('./modules').sayHello;
//sayHello();

//myModule.showGreeting();

const Person = require('./person');
const theDonald = new Person('Donald', 'Trump');
console.log(theDonald);
theDonald.print();