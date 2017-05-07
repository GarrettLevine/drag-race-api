const express = require(`express`);

const { Queen } = require(`../models`)
const router = express.Router();

router.get(`/`, (req, res) => {
    new Promise((resolve, reject) => {
        Queen.find((err, queens) => {
            if (err) reject(err);
            resolve(queens);
        });
    })
    .then(queens => res.json(queens))
    .catch(err => res.json(err));
});

router.get(`/:id`, (req, res) => {
    new Promise((resolve, reject) => {
        Queen.findById(req.params.id, (err, queen) => {
            if (err) reject(err);
            resolve(queen);
        });
    })
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
});

router.post(`/create`, (req, res) => {
    Queen.create({
        name: req.body.name,
        winner: req.body.winner,
        quote: req.body.quote,
        image_url: req.body.image_url,
    })
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
});

router.put(`/:id/update`, (req, res) => {
    new Promise((resolve, reject) => {
        Queen.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, queen) => {
            if (err) reject(err);
            resolve(queen);
        });
    })
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
});

router.delete(`/:id/delete`, (req, res) => {
    new Promise((resolve, reject) => {
        // passing in an empty options object as the 3rd argument
        Queen.findByIdAndRemove(req.params.id, {}, err => {
            if (err) reject(err);
            resolve(true);
        })
    })
    .then(() => res.json({ message: `Queen removed from database. ID: ${req.params.id}` }))
    .catch(err => res.json(err));
});

module.exports = router;
