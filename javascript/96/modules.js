//let exports = module.exports = {}
//module.exports.sayHello = () => {

/*exports.sayHello = () => {
    console.log('hello');
}*/

function showGreeting() {
    console.log('hello');
}

//exports = {
module.exports = {
    //sayHello: () => console.log('hello')
    sayHello: () => showGreeting()
}

