const express = require(`express`);
const router = express.Router();

const endpoints = require('endpoints/seasons');

router.get('/', endpoints.getSeasons);
router.get('/:id', endpoints.getSeasonById);
router.post('/create', endpoints.create);

module.exports = router;
