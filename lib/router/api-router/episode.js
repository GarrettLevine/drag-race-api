const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const episodeEndpoints = require(`endpoints/episodes`);
const challengesEndpoints = require(`endpoints/challenges`);
const lipsyncsEndpoints = require(`endpoints/lipsyncs`);
const judgesEndpoints = require(`endpoints/judges`);

router.get(`/`, [queryLimit, offsetCheck], episodeEndpoints.getEpisodes);
router.get(`/:id`, episodeEndpoints.getEpisodeById);
router.get(`/:id/challenges`, challengesEndpoints.getEpisodeChallenges);
router.get(`/:id/lipsyncs`, lipsyncsEndpoints.getEpisodeLipsyncs);
router.get(`/:id/judges`, judgesEndpoints.getEpisodeJudges);
router.post(`/create`, [adminRoute], episodeEndpoints.create);
router.post(`/create/full`, [adminRoute], episodeEndpoints.createFull);

module.exports = router;
