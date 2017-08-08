const {
  Season,
  Queen,
} = require('models');
const { formatQueen } = require('utils');

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
  .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getWinners;