const express = require(`express`);
const router = express.Router();

const { adminRoute } = require(`middleware`);

const endpoints = require(`endpoints/episodes`);

// router.get(`/`, endpoints.getEpisodes);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
