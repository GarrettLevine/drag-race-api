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
    const queen = new Queen();
    queen.name = req.body.name;
    queen.winner = req.body.winner;
    queen.place = req.body.place;
    queen.season = req.body.season;
    queen.episodes = req.body.episodes;
    queen.quote = req.body.quote;
    queen.image_url = req.body.image_url;

    new Promise((resolve, reject) => {
        queen.save(err => {
            if (err) reject(err);
            resolve(queen);
        });
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
