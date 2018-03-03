const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/judges`);

router.get(`/`, [queryLimit], endpoints.getJudges);
router.get(`/:id`, endpoints.getJudgeById);
router.get(`/all`, endpoints.getAllJudgesNames);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
