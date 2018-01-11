const {
    Season,
    Queen,
} = require('models');
const {
  formatQueen,
  errorHandler: eh,
} = require('utils');

function getCongeniality(req, res) {
  return Queen.findAll({
    where: {
      missCongeniality: true,
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

module.exports = getCongeniality;