const User = require('../../../db/migrations/users');
const responses = require('../../responses');
const crypto = require("crypto");

module.exports = {
    create: async (req, res) => {
        if (req.body.username && req.body.email){
            const user = await User.create({
                username: req.body.username,
                email: req.body.email,
                token: '$2y$10$' + crypto.randomBytes(53).toString('hex')
            });
            res.json(responses.doneCreateItem(user));
        }else {
            res.status(400).json(responses.badRequest([]));
        }
    },
    list: async (req, res) => {
        const users = await User.findAll();
        res.json(responses.doneGetItems(users));
    }
};