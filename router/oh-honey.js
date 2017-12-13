const express = require(`express`);
const router = express.Router();

const { adminRoute } = require(`middleware`);

const ohHoneyEndpoints = require(`endpoints/oh-honey`);

router.get(`/`, ohHoneyEndpoints.getHoney);
router.post(`/create`, [adminRoute], ohHoneyEndpoints.create);

module.exports = router;
