const {
  Season,
  Queen,
} = require(`models`);

const {
  formatQueen,
  formatSeason,
  errorHandler: what,
} = require(`utils`);

function getSeasonQueens(req, res) {
  let queens;
  const { id } = req.params;

  return Queen.findAll({
    include: [{
      model: Season,
      where: {
        id: id,
      },
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

module.exports = getSeasonQueens;
