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

router.get(`/`, [queryLimit, offsetCheck], episodeEndpoints.getEpisodes);
router.get(`/:id`, episodeEndpoints.getEpisodeById);
router.get(`/:id/challenges`, challengesEndpoints.getEpisodeChallenges);
router.get(`/:id/lipsyncs`, lipsyncsEndpoints.getEpisodeLipsyncs);
router.post(`/create`, [adminRoute], episodeEndpoints.create);

module.exports = router;
