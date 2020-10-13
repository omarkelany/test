module.exports = {
    auth: function (req, res, next) {
        console.log('auth');
        next();
    }
};