const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const episodeEndpoints = require(`endpoints/episodes`);
const challengesEndpoints = require(`endpoints/challenges`);

router.get(`/`, [queryLimit, offsetCheck], episodeEndpoints.getEpisodes);
router.get(`/:id`, episodeEndpoints.getEpisodeById);
router.get(`/:id/challenges`, challengesEndpoints.getEpisodeChallenges)
router.post(`/create`, [adminRoute], episodeEndpoints.create);

module.exports = router;
