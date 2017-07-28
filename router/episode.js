const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/episodes`);

router.get(`/`, [queryLimit], endpoints.getEpisodes);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
