//const connect = require('connect');
//const app = connect();
const app = require('connect')();

/*
app.use((req, res, next) => {
    res.write('Hello from Connect');
    next();
});

app.use('/middle', (req, res, next) => {
    res.write('Im in the middle');
    next();
});

app.use((req, res, next) => {
    res.end('Goodbye from Connect');
});
*/

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

app.use('/home', (req, res, next) => {
    res.end/*write*/('<h1>Welcome to PCS!</h1>');
    //next();
});

app.use('/about', (req, res, next) => {
    res.end/*write*/('<h1>PCS is a great place!</h1>');
    //next();
});

/*app.use((req, res, next) => {
    res.write('<h5>PCS reminds you, always do your homework!</h5>');
    next();
});*/

/*const url = require('url');
app.use((req, res, next) => {
    const parsedUrl = url.parse(req.url, true);
    req.query = parsedUrl.query;
    next();
})*/
app.use(require('./queryParser'));

app.use('/sayHello', (req, res, next) => {
    //const parsedUrl = url.parse(req.url, true);
    res.end(`Hello ${req/*parsedUrl*/.query.name || 'stranger'}`);
});

app.use('/sayGoodbye', (req, res, next) => {
    //const parsedUrl = url.parse(req.url, true);
    res.end(`Goodbye ${req/*parsedUrl*/.query.name || 'stranger'}`);
});

app.use('/makeError', (req, res, next) => {
    //foo.bar();
    throw new Error('OOPS!');
    //next(new Error('OOPS!'));
});

app.use((error, req, res, next) => {
    res.statusCode = 500;
    res.write(`<h5>Server error: ${error.message}</h5>`);
    next(error);
});

app.use((error, req, res, next) => {
    res.end(`<h5>Really, its a server error: ${error.message}</h5>`);
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.write('<h5>No such page!</h5>');
    next();
});



app.listen(80);