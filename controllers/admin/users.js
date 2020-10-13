const express = require('express');

const router = express();

const User = require('../../db/migrations/users');
const responses = require('../responses');
const middlewares = require('../middlewares');

router.post('/', middlewares.auth, async (req, res) => {
    if (req.body.username && req.body.email){
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        });
        res.json(responses.doneCreateItem(user));
    }else {
        res.json(responses.badRequest([]));
    }
});

module.exports = router;