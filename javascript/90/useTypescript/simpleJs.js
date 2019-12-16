function greeter(person) {
    return `Hello ${person}`;
}

const person = 'Donald Trump';

document.body.innerHTML = greeter(person);