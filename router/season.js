const express = require(`express`);
const router = express.Router();

const { adminRoute } = require('middleware');

const endpoints = require('endpoints/seasons');

router.get('/', endpoints.getSeasons);
router.get('/:id', endpoints.getSeasonById);
router.get(`/:id/queens`, endpoints.getSeasonQueens);
router.post('/create', [adminRoute], endpoints.create);

module.exports = router;
