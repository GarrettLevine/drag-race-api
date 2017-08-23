const express = require(`express`);

const queenEndpoints = require(`endpoints/queens`);
const episodeEndpoints = require(`endpoints/episodes`);

const {
  adminRoute,
  offsetCheck,
  queryLimit,
} = require('middleware');

const router = express.Router();

router.get(`/`, [queryLimit, offsetCheck], queenEndpoints.getQueens);
router.get(`/congeniality`, [queryLimit], queenEndpoints.getCongeniality);
router.get(`/winners`, [queryLimit], queenEndpoints.getWinners);
router.get(`/:id`, queenEndpoints.getQueenById);
router.get(`/:id/episodes`, episodeEndpoints.getEpisodesByQueen);
router.get(`/:id/lipsyncs`, queenEndpoints.getQueenLipsyncs);
router.post(`/create`, [adminRoute], queenEndpoints.create);

module.exports = router;
