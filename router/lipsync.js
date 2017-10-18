const express = require(`express`);
const router = express.Router();

const {
    adminRoute,
    queryLimit,
} = require(`middleware`);

const lipsyncsEndpoints = require(`endpoints/lipsyncs`);

router.get(`/`, [queryLimit], lipsyncsEndpoints.getLipsyncs);
router.get(`/:id`, lipsyncsEndpoints.getLipsyncById);
router.post(`/create`, [adminRoute], lipsyncsEndpoints.create);

module.exports = router;
