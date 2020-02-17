const db = require('./dbPool');
const bcrypt = require('bcrypt');

module.exports = (req, res, next) => {

    db.query('SELECT password FROM users WHERE user = ?',
        [req.body.user], (error, results) => {
            if (error) return next(error);
            if (!results.length) return next(new Error('Invalid username and password'));

            bcrypt.compare(req.body.password, results[0].password, (error, result) => {
                if (error) return next(error);
                if (!result) return next(new Error('Invalid username and password'));

                req.session.user = req.body.user;
                res.redirect('/topSecret');
            });
        });
};