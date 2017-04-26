const express = require(`express`);

const router = express.Router();

const queenRouter = require(`./queens`);
const seasonRouter = require(`./season`);

router.use(`/queen`, queenRouter);
router.use(`/season`, seasonRouter);

module.exports = router;
