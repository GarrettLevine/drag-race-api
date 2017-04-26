const express = require(`express`);

const Season = require(`../models/Season`)

const router = express.Router();

router.get(`/`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.find((err, season) => {
            if (err) reject(err);
            resolve(season);
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

router.post(`/create`, (req, res) => {
    const season = new Season();
    season.number = req.body.number;
    season.queens.label = req.body.queensLabelArray;
    season.queens.id = req.body.queensIdArray;
    season.year = req.body.year;
    season.episodes.label = req.body.episodesLabelArray;
    season.episodes.id = req.body.episodesIdArray;
    season.winner.label = req.body.winnerLabel;
    season.winner.id = req.body.winnerId;
    season.runnerUps.label = req.body.runnerUpsLabelArray;
    season.runnerUps.id = req.body.runnerUpsIdArray;

    new Promise((resolve, reject) => {
        season.save(err => {
            if (err) reject(err);
            resolve(season);
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

module.exports = router;
