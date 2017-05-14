const express = require(`express`);
const router = express.Router();

const endpoints = require('endpoints/seasons');

router.post('/create', endpoints.create);

module.exports = router;
