const express = require('express');

const libs = process.cwd() + '/libs/';

const oauth2 = require('../auth/oauth2');
const log = require('./log')(module);
const	router = express.Router();

router.post('/token', oauth2.token);

module.exports = router;