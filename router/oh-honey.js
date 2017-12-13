const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    offsetCheck,
    queryLimit,
} = require(`middleware`);

const ohHoneyEndpoints = require(`endpoints/oh-honey`);

router.get(`/`, [queryLimit, offsetCheck], ohHoneyEndpoints.getHoney);
router.post(`/create`, [adminRoute], ohHoneyEndpoints.create);

module.exports = router;
