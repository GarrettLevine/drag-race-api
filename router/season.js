const express = require(`express`);

const Season = require(`../models/Season`)

const router = express.Router();

// Get all seasons

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

// Get a season by its ID

router.get(`/:season_id`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.findById(req.params.season_id, (err, season) => {
            if (err) reject(err);
            resolve(season);
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

// Create a new season

router.post(`/create`, (req, res) => {
    const season = new Season();
    season.season = req.body.season;
    season.queens.label = req.body.queensLabel;
    season.queens.id = req.body.queensId;
    season.year = req.body.year;
    season.episodes.label = req.body.episodesLabel;
    season.episodes.id = req.body.episodesId;
    season.winner.label = req.body.winnerLabel;
    season.winner.id = req.body.winnerId;
    season.runnersUp.label = req.body.runnersUpLabel;
    season.runnersUp.id = req.body.runnersUpId;

    new Promise((resolve, reject) => {
        season.save(err => {
            if (err) reject(err);
            resolve(season);
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

// Update a season by its ID

router.put(`/:season_id`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.findById(req.params.season_id, (err, season) => {
            if (err) reject(err);
            season.season = req.body.season;
            season.queens.label = req.body.queensLabel;
            season.queens.id = req.body.queensId;
            season.year = req.body.year;
            season.episodes.label = req.body.episodesLabel;
            season.episodes.id = req.body.episodesId;
            season.winner.label = req.body.winnerLabel;
            season.winner.id = req.body.winnerId;
            season.runnersUp.label = req.body.runnersUpLabel;
            season.runnersUp.id = req.body.runnersUpId;
            season.save(err => {
                if (err) reject(err);
                resolve(season);
            });
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

// Delete a season by its ID

router.delete(`/:season_id`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.remove(req.params.season_id, (err, season) => {
            if (err) reject(err);
            resolve(season);
        })
    })
    .then(season => console.log(`Deleted!`))
    .catch(err => console.log(err));
});

module.exports = router;
