const express = require(`express`);
const path = require(`path`);

const router = express.Router();
router.use(`/*`, (req, res, next) => {
    res.sendFile(path.resolve(`./public/index.html`), undefined, err => {
        if (err) next(err);
    });
});

module.exports = router;
