//const express = require('express');
//const app = express();
const app = require('express')();

app.get('/', (req, res, next) => {
    res.send({ iAm: 'an object' });
});

app.get('/sayHello', (req, res, next) => {
    res.send(`Hello #1 ${req.query.name || 'stranger'}`);
});

app.get('/sayHello/:name', (req, res, next) => {
    res.send(`Hello #2 ${req.params.name || 'stranger'}`);
});

app.get('/reports/:state/:year/:month', (req, res, next) => {
    res.send(req.params);
});

app.param('userId', (req, res, next) => {
    // pretend to look up in db and make available to later middleware
    req.user = {
        name: 'Name from db',
        id: req.params.userId
    };
    next();
});

app.get('/a/:userId', (req, res, next) => {
    res.send(req.user);
});

app.get('/b/:userId', (req, res, next) => {
    res.send(req.user);
});

app.listen(80);