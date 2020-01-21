const events = require('events');

const eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(12);

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('doHomework', () => {
    console.log('Doing homework...');
});

eventEmitter.on('sleep', () => {
    console.log('Sleeping...');
});

eventEmitter.emit('sleep');
setTimeout(() => eventEmitter.emit('doHomework'), 2000);