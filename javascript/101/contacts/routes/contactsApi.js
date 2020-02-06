var debug = require('debug')('contacts:contactsApi');
var express = require('express');
var router = express.Router();
const ApiError = require('./apiError');
const db = require('../pool');

router.route('/')
    .get((req, res, next) => {
        db.query('SELECT * FROM contacts', (error, results, fields) => {
            if (error) return next(new ApiError(`Unable to fetch contacts ${error.message}`));
            res.send(results);
        });
    })
    .post((req, res, next) => {
        debug('Adding contact', req.body);

        db.query(`INSERT INTO CONTACTS(firstName, lastName, email, phone)
                  VALUES(?, ?, ?, ?)`,
            [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to add contact ${error.message}`));
                if (!result.affectedRows) return next(new ApiError(`Unable to add contact`));

                const contact = {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phone: req.body.phone,
                    id: result.insertId
                };
                res.status(201).send(contact);
            }
        );
    });

router.route('/:id')
    .get((req, res, next) => {
        db.query('SELECT * FROM contacts WHERE id = ?',
            [req.params.id],
            (error, [result], fields) => {
                if (error) return next(new ApiError(`Unable to get contact ${req.params.id} ${error.message}`));
                if (!result) return next(new ApiError(`Unable to get contact ${req.params.id}`, 404));

                res.send(result);
            });
    })
    .put((req, res, next) => {
        db.query(`UPDATE CONTACTS SET firstName = ?, lastName = ?, email = ?, phone = ?
              WHERE id = ?`,
            [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to update contact ${req.params.id} ${error.message}`));
                console.log(result);
                if (!result.changedRows) return next(new ApiError(`Unable to update contact`, 404));

                res.status(204).end();
            }
        );
    })
    .delete((req, res, next) => {
        db.query(`DELETE FROM CONTACTS WHERE id = ?`,
            [req.params.id],
            (error, result) => {
                if (error) return next(new ApiError(`Unable to delete contact ${req.params.id} ${error.message}`));
                if (!result.affectedRows) return next(new ApiError(`Unable to delete contact ${req.params.id}`, 404));

                res.status(204).end();
            }
        );
    });

router.use((error, req, res, next) => {
    res.status(error.statusCode || 500)
        .send({ error: error.message });
});

module.exports = router;