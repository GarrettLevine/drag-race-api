const express = require(`express`);

const queenEndpoints = require(`endpoints/queens`);
const episodeEndpoints = require(`endpoints/episodes`);
const challengesEndpoints = require(`endpoints/challenges`);
const lipsyncsEndpoints = require(`endpoints/lipsyncs`);

const {
  adminRoute,
  offsetCheck,
  queryLimit,
} = require('middleware');

const router = express.Router();

router.get(`/`, [queryLimit, offsetCheck], queenEndpoints.getQueens);
router.get(`/all`, queenEndpoints.getAllQueens);
router.get(`/congeniality`, [queryLimit], queenEndpoints.getCongeniality);
router.get(`/winners`, [queryLimit], queenEndpoints.getWinners);

router.get(`/:id`, queenEndpoints.getQueenById);
router.get(`/:id/challenges`, challengesEndpoints.getQueenChallenges);
router.get(`/:id/episodes`, episodeEndpoints.getEpisodesByQueen);
router.get(`/:id/lipsyncs`, lipsyncsEndpoints.getQueenLipsyncs);
router.post(`/create`, [adminRoute], queenEndpoints.create);

module.exports = router;
