const express = require('express');

const router = express.Router();

const queenRouter = require('./queens');

router.use('/queens', queenRouter);

module.exports = router;
