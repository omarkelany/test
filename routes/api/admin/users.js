const middlewares = require('../../../app/middlewares');
const users = require('../../../app/controllers/admin/users');
const express = require('express');
const router = express();

router.post('/', middlewares.auth, users.create);

router.get('/', middlewares.auth, users.list);

module.exports = router;