const express = require('express');

const router = express();

const User = require('../../db/migrations/users');
const responses = require('../responses');
const middlewares = require('../middlewares');
const crypto = require("crypto");

router.post('/', middlewares.auth, async (req, res) => {
    if (req.body.username && req.body.email){
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            token: crypto.randomBytes(16).toString('hex')
        });
        res.json(responses.doneCreateItem(user));
    }else {
        res.status(400).json(responses.badRequest([]));
    }
});

module.exports = router;