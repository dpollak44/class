// note that queryParser middleware must be used BEFORE this one
module.exports = (req, res, next) => {
    if (req.query.magicWord === 'please') {
        return next();
    }
    res.statusCode = 401;
    next('You didnt say the magic word!');
};