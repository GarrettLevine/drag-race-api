const {
  Season,
  Queen,
} = require('models');

function getQueenById(req, res) {
  return Queen.findById(req.params.id, {
      include: [{
        model: Season,
        through: {
          attributes: ['place'],
        },
      }],
    })
    .then(queen => res.json(queen))
    .catch(err => res.json(err));
}

module.exports = getQueenById;
