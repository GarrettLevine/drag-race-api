const express = require(`express`);

const router = express.Router();

const challengeRouter = require(`./challenges`);
const episodeRouter = require(`./episode`);
const lipsyncRouter = require(`./lipsync`);
const seasonRouter = require(`./season`);
const queenRouter = require(`./queens`);
const ohHoneyRouter = require(`./oh-honey`);

router.use(`/challenges`, challengeRouter);
router.use(`/episodes`, episodeRouter);
router.use(`/lipsyncs`, lipsyncRouter);
router.use(`/queens`, queenRouter);
router.use(`/seasons`, seasonRouter);
<<<<<<< HEAD:lib/router/api-router/index.js
router.use(`/*`, (req, res) => {
    res.status(400).json({ message: 'no route found.' });
});
=======
router.use(`/oh-honey`, ohHoneyRouter);
>>>>>>> e3e884e87fe3c455d5aa176b36326d932268e733:router/index.js

module.exports = router;
