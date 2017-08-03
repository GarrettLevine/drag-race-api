const {
  Queen,
  Lipsync,
} = require('models');

function create(req, res) {
    let lipsync;

    return Lipsync.create({
        name: req.body.name,
        artist: req.body.artist,
        episodeId: req.body.episodeId,
    })
    .then(l => {
        lipsync = l;
        const queensArray = req.body.queens
            .map(queen => Queen.findById(queen.id));

        return Promise.all(queensArray);
        })
    .then(queens => {
        const queensLipsyncsArray = req.body.queens
            .map(queen => lipsync.addQueen(queens.find(q => q.id === queen.id), {
            won: queen.won || false,
        }));

        return Promise.all(queensLipsyncsArray);
    })
    .then(() => res.status(200).json(lipsync))
    .catch(err => res.status(500).json(err));
}

module.exports = create;
