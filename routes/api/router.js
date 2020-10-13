const express = require('express');

const router = express();

router.use(express.json());

const admin = require('./admin/router');

router.use('/admin', admin);

module.exports = router;
