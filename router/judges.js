const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/judges`);

router.get(`/`, [queryLimit], endpoints.getJudges);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
