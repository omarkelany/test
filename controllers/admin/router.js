const express = require('express');

const router = express();

const users = require('./users');

router.use('/user', users);

module.exports = router;
