const {
  Season,
  Queen,
} = require('models');
const { formatQueen } = require('../utils')

function getQueenById(req, res) {
  return Queen.findById(req.params.id, {
      include: [{
        model: Season,
        through: {
          attributes: ['place'],
        },
      }],
    })
    .then(queen => res.json(formatQueen(queen)))
    .catch(err => res.json(err));
}

module.exports = getQueenById;
