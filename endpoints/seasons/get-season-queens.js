const {
  Season,
  Queen,
} = require(`models`);

const { formatQueen } = require(`utils`);

function getSeasonQueens(req, res) {
  const { id } = req.params;

  return Queen.findAll({
    include: [{
      model: Season,
      where: {
        id,
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
