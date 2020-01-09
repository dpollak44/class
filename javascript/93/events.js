/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers
    .filter(n => n % 2 === 0)
    .map(n => `number ${n}`)
    .forEach(n => console.log(n));*/

// this syntax no longer works - we need to use pipe, see below
/*rxjs.from(numbers)
    .filter(n => n % 2 === 0)
    .map(n => `number ${n}`)
    .forEach(n => console.log(n));*/

/*rxjs.from(numbers)
    .pipe(
        rxjs.operators.filter(n => n % 2 === 0),
        rxjs.operators.map(n => `number ${n}`)
    ).forEach(n => console.log(n));*/

/*rxjs.interval(1000)
    .pipe(
        rxjs.operators.take(9),
        rxjs.operators.filter(n => n % 2 === 0),
        rxjs.operators.map(n => `number ${n}`)
    ).forEach(n => console.log(n));

let i = 0;
setInterval(() => console.log(i++), 500);*/

/*const button1 = document.getElementById('button1');
let clickCount = 0;
let clickHandler = e => {
    console.log(e.timeStamp);
    if (++clickCount === 3) {
        button1.removeEventListener('click', clickHandler);
    }
}
button1.addEventListener('click', clickHandler);*/

/*
rxjs.fromEvent(button1, 'click')
    .pipe(
        rxjs.operators.take(3),
        rxjs.operators.map(e => e.timeStamp)
    ).forEach(c => console.log(c));
*/

const myObserver = {
    next: v => console.log(`got ${v}`),
    error: e => console.error(`got ${e}`),
    complete: () => console.log('completed')
};

/* try catch doesnt work
try {
    rxjs.fromEvent(button1, 'click')
        .pipe(
            rxjs.operators.take(3),
            rxjs.operators.map(e => {
                throw new Error('OOPS');
                return e.timeStamp;
            })
        ).subscribe(
            /*v => console.log(`got ${v}`),
            e => console.error(`got ${e}`),
            () => console.log('completed')* /
            myObserver
        );
} catch (error) {
    console.error(`caught ${error}`);
}*/

/*const subscription = rxjs.fromEvent(button1, 'click')
    .pipe(
        rxjs.operators.map(e => {
            return e.timeStamp;
        })
    ).subscribe(
        myObserver
    );

setTimeout(() => subscription.unsubscribe(), 5000);*/

/*rxjs.Observable.create(obs => {
    //obs.next('value #1');
    //obs.error('OOPS');
    //obs.complete();
    //obs.next('value #2');
    let i = 0;
    const interval = setInterval(() => obs.next(i++), 1000);
    setTimeout(() => {
        obs.complete();
        clearInterval(interval);
    }, 5000);
}).subscribe(
    myObserver
);*/

const button1 = document.getElementById('button1');
const subscription = rxjs.Observable.create(obs => {
    let i = 0;
    button1.addEventListener('click', e => {
        if (i++ === 3) {
            obs.complete();
        }
        obs.next(e.timeStamp);
    });
}).subscribe(
    myObserver
);

setTimeout(() => subscription.unsubscribe(), 5000);

