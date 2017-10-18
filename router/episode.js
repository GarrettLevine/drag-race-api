const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/episodes`);
const lipsyncsEndpoints = require(`endpoints/lipsyncs`);

router.get(`/`, [queryLimit, offsetCheck], endpoints.getEpisodes);
router.get(`/:id`, endpoints.getEpisodeById);
router.get(`/queen/:queenId`, endpoints.getEpisodesByQueen);
router.get(`/:id/lipsyncs`, lipsyncsEndpoints.getEpisodeLipsyncs);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
