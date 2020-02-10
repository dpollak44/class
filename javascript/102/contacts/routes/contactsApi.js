var debug = require('debug')('contacts:contactsApi');
var express = require('express');
var router = express.Router();
const ApiError = require('./apiError');
const db = require('../pool');

const joi = require('@hapi/joi');

const schema = joi.object({
    firstName: joi.string().allow(''),
    lastName: joi.string().alphanum().min(3).required(),
    email: joi.string().allow(''),
    phone: joi.string().allow('')
});

router.route('/')
    .get((req, res, next) => {
        db.query('SELECT * FROM contacts', (error, results, fields) => {
            if (error) return next(new ApiError(`Unable to fetch contacts ${error.message}`));
            res.send(results);
        });
    })
    .post((req, res, next) => {
        debug('Adding contact', req.body);

        /*if(!req.body.lastName) {
            return next(new ApiError(`Last name is required`, 400));
        }
        if(req.body.lastName.length < 3) {
            return next(new ApiError(`Last name must be at least 3 characters`, 400));
        }*/

        const result = schema.validate(req.body, {abortEarly: false});
        if (result.error) {
            const message = result.error.details.map(e => e.message).join(', ');
            return next(new ApiError(message, 400));
        }

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
        const result = schema.validate(req.body, {abortEarly: false});
        if (result.error) {
            const message = result.error.details.map(e => e.message).join(', ');
            return next(new ApiError(message, 400));
        }
        
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