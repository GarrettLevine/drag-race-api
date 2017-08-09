const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/episodes`);

router.get(`/`, [queryLimit, offsetCheck], endpoints.getEpisodes);
router.get(`/:id`, endpoints.getEpisodeById);
router.get(`/queen/:queenId`, endpoints.getEpisodesByQueen);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
