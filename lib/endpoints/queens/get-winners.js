const {
  Queen,
  Season,
} = require(`models`);
const {
  formatQueen,
  errorHandler: eh,
} = require(`utils`);

function getWinners(req, res) {
  let winnerIds;
  return Season.findAll({
    include: {
      model: Queen,
      through: {
        where: { place: 1 },
      },
    },
  })
  .then(seasons => seasons.forEach(season => {
    season.Queens.forEach(s => {
      winnerIds = [...winnerIds, s.id];
    })
  }))
  .then(() => {
      return Promise.all(winnerIds.map(id => Queen.findById(id, { include: { model: Season } })));
  })
  .then(queens => {
    const formatedQueens = queens.map(queen => formatQueen(queen));
    res.status(200).json(formatedQueens);
  })
  .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getWinners;
