const {
    OhHoney,
    Queen,
} = require('models');

function create(req, res) {
    let ohHoney;

    return OhHoney.create({
        quote: req.body.quote,
        queenId: req.body.queenId,
    })
    .then(o => {
        ohHoney = o;
    })
    .then(() => res.status(200).json(ohHoney))
    .catch(err => res.status(500).json(err));
}

module.exports = create;
