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

rxjs.fromEvent(button1, 'click')
    .pipe(
        rxjs.operators.take(3),
        rxjs.operators.map(e => e.timeStamp)
    ).forEach(c => console.log(c));