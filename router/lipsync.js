const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    queryLimit,
} = require(`middleware`);

const endpoints = require(`endpoints/lipsyncs`);

router.get(`/`, [queryLimit], endpoints.getLipsyncs);
router.get(`/:id`, endpoints.getLipsyncById);
router.post(`/create`, [adminRoute], endpoints.create);

module.exports = router;
