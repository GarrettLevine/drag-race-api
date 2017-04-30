const express = require(`express`);

const Episode = require(`../models/Episode`)

const router = express.Router();

// Get all episodes

router.get(`/`, (req, res) => {
    new Promise((resolve, reject) => {
        Episode.find((err, episode) => {
            if (err) reject(err);
            resolve(episode);
        });
    })
    .then(episode => res.json(episode))
    .catch(err => res.json(err));
});

// Get episode by ID

router.get(`/:id`, (req, res) => {
    new Promise((resolve, reject) => {
        Episode.findById(req.params.id, (err, episode) => {
            if (err) reject(err);
            resolve(episode);
        });
    })
    .then(episode => res.json(episode))
    .catch(err => res.json(err));
});

// Create new episode

router.post(`/create`, (req, res) => {
    const episode = new Episode();
    episode.season = req.body.season;
    episode.episode = req.body.episode;
    episode.title = req.body.title;
    episode.airDate = req.body.airDate;
    episode.miniChallenge = req.body.miniChallenge;
    episode.mainChallenge = req.body.mainChallenge;
    episode.bottomTwo = req.body.bottomTwo;
    episode.lipsyncSong = req.body.lipsyncSong;
    episode.eliminatedQueen = req.body.eliminatedQueen;

    new Promise((resolve, reject) => {
        episode.save(err => {
            if (err) reject(err);
            resolve(episode);
        });
    })
    .then(episode => res.json(episode))
    .catch(err => res.json(err));
});

// Update episode by its ID

router.put(`/:id/update`, (req, res) => {
    new Promise((resolve, reject) => {
        Episode.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, episode) => {
            if (err) reject(err);
            resolve(episode);
        });
    })
    .then(episode => res.json(episode))
    .catch(err => res.json(err));
});

// Delete episode by its ID

router.delete(`/:id/delete`, (req, res) => {
    new Promise((resolve, reject) => {
        Episode.findByIdAndRemove(req.params.id, {}, err => {
            if (err) reject(err);
            resolve(true);
        })
    })
    .then(() => res.json({ message: `Episode removed from database. ID: ${req.params.id}` }))
    .catch(err => res.json(err));
});

module.exports = router;
