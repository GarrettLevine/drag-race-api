const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/challenges`);

router.get(`/`, [queryLimit, offsetCheck], endpoints.getChallenges);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
