const {
  Season,
  Queen,
} = require('models');
const { formatQueen } = require('utils');

function getQueens(req, res) {
  let queens;

  return Queen.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
    include: [{
      model: Season,
      through: {
        attributes: ['place'],
      },
    }],
  })
  .then(queens => {
    const formatedQueens = queens
      .map(queen => formatQueen(queen));
    res.json(formatedQueens);
  })
  .catch(err => res.status(400).json(err));
}

module.exports = getQueens;
