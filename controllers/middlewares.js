const responses = require('./responses');

module.exports = {
    auth: async (req, res, next) => {
        const User = require('../db/migrations/users');
        let token = req.headers.authorization;
        if (token === undefined){
            res.status(401).json(responses.notAuthorize())
        }else {
            token = token.split(' ')[1];
            User.findOne({where: {token: token}}).then((data) => {
                if (data === null) {
                    return res.status(401).json(responses.notAuthorize())
                } else {
                    next();
                }
            });
        }
    }
};