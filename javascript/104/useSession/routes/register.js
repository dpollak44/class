const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../dbPool');

router.route('/')
    .get((req, res, next) => {
        res.render('layout', { title: 'Express', partials: { content: 'register' } });
    })
    .post((req, res, next) => {
        if (!req.body.user || !req.body.password) {
            return next('User and password are required');
        }
        bcrypt.hash(req.body.password, 10, function (error, hash) {
            if (error) return next(error);

            db.query(`INSERT INTO USERS(user, password)
                  VALUES(?, ?)`,
                [req.body.user, hash],
                (error, result) => {
                    if (error) return next(error);
                    if (!result.affectedRows) return next(new Error(`Unable to register. Try another name`));

                    res.redirect('/');
                });
        });
    });

module.exports = router;
