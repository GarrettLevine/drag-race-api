const express = require(`express`);

const router = express.Router();

const queenRouter = require(`./queens`);
const seasonRouter = require(`./season`);
const episodeRouter = require(`./episode`);

router.use(`/queens`, queenRouter);
router.use(`/seasons`, seasonRouter);
router.use(`/episodes`, episodeRouter);

module.exports = router;
