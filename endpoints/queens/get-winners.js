const {
  Season,
  Queen,
} = require('models');
const { formatQueen } = require('../utils');

function getWinners(req, res) {
  return Queen.findAll({
    where: {
      winner: true,
    },
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
  .catch(err => res.json(err));
}

module.exports = getWinners;