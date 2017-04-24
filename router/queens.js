const express = require(`express`);

const Queen = require(`../models/Queen`)

const router = express.Router();

router.get(`/`, (req, res) => {
    new Promise((resolve, reject) => {
        Queen.find((err, queens) => {
            if (err) reject(err);
            resolve(queens);
        });
    })
    .then(queens => {
        res.json(queens);
    })
    .catch(err =>
        res.json(err));
});

router.post(`/create`, (req, res) => {
    const queen = new Queen();
    queen.name = req.body.name;
    queen.winner = req.body.winner;
    queen.place = req.body.place;
    queen.season.label = req.body.seasonLabel;
    queen.season.id = req.body.seasonId;
    queen.episodes = req.body.episodesArray;
    queen.quote = req.body.quote;
    queen.image_url = req.body.image_url;

    new Promise((resolve, reject) => {
        queen.save(err => {
            if (err) reject(err);

            resolve(queen);
        });
    })
    .then(queen => {
        res.json(queen);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;