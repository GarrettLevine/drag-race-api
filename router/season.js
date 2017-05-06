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

router.get(`/:id`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.findById(req.params.id, (err, season) => {
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
    Season.create({
        season: req.body.season,
        year: req.body.year,
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

// Update a season by its ID

router.put(`/:id/update`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, season) => {
            if (err) reject(err);
            resolve(season);
        });
    })
    .then(season => res.json(season))
    .catch(err => res.json(err));
});

// Delete a season by its ID

router.delete(`/:id/delete`, (req, res) => {
    new Promise((resolve, reject) => {
        Season.findByIdAndDelete(req.params.id, {}, err => {
            if (err) reject(err);
            resolve(true);
        })
    })
    .then(() => res.json({ message: `Season removed from database. ID: ${req.params.id}` }))
    .catch(err => res.json(err));
});

module.exports = router;
