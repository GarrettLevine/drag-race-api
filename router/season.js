const express = require(`express`);
const router = express.Router();

const { adminRoute } = require('middleware');

const endpoints = require('endpoints/seasons');

router.get('/', endpoints.getSeasons);
router.get('/:id', endpoints.getSeasonById);
router.post('/create', [adminRoute], endpoints.create);

module.exports = router;
