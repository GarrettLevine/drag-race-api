const express = require(`express`);

const router = express.Router();

const queenRouter = require(`./queens`);
const seasonRouter = require(`./season`);
const episodeRouter = require(`./episode`);

router.use(`/queen`, queenRouter);
router.use(`/season`, seasonRouter);
router.use(`/episode`, episodeRouter);

module.exports = router;
