const express = require(`express`);

const router = express.Router();

const queenRouter = require(`./queens`);
const seasonRouter = require(`./season`);

router.use(`/queens`, queenRouter);
router.use(`/season`, seasonRouter);

module.exports = router;
