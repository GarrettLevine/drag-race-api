const {
  Challenge,
  Queen,
} = require('models');

function create(req, res) {
  let challenge;

  return Challenge.create({
    type: req.body.type,
    description: req.body.description,
    prize: req.body.prize,
    episodeId: req.body.episodeId,
  })
  .then(c => {
    challenge = c;

    const queensArray = req.body.queens
      .map(queen => Queen.findById(queen.id));
    return Promise.all(queensArray);
  })
  .then(queens => {
    const queensArray = req.body.queens
      .map(queen => challenge.addQueen(queens.find(q => q.id === queen.id), {
        won: queen.won || false,
      }));
    return Promise.all(queensArray);
  })
  .then(() => res.status(200).json(challenge))
  .catch(err => res.status(500).json(err));
}

module.exports = create;
