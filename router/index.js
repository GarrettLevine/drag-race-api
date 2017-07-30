const express = require(`express`);

const router = express.Router();

const queenRouter = require(`./queens`);
const seasonRouter = require(`./season`);
const episodeRouter = require(`./episode`);
const lipsyncRouter = require(`./lipsync`);

router.use(`/queens`, queenRouter);
router.use(`/seasons`, seasonRouter);
router.use(`/episodes`, episodeRouter);
router.use(`/lipsyncs`, lipsyncRouter);

module.exports = router;
