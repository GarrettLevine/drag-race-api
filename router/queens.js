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
    .then(queen => {
        res.json(queen);
    })
    .catch(err => rs.json(err));
});

router.post(`/create`, (req, res) => {
    const queen = new Queen();
    console.log(req.body)
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

module.exports = router;
