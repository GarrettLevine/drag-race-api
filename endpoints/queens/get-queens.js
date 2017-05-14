const { Queen } = require('models');

function getQueens(req, res) {
  let queens;
  return Queen.getAll({
    limit: req.params.limit || 20,
    offset: req.params.offset || 0,
  })
  .then(qs => {
    queens = qs;
    return Promise.all(queens.map(queen => queen.getSeasons()));
  })
  .then(queensSeasons => {
    return queens.map(queen => Object.assign(queen, {
      seasons: queensSeasons.filter(qs => qs.queenId === queen.id),
    }));
  })
  .then(formatedQueens => res.json(formatedQueens))
  .then(err => res.json(err));
}

module.exports = getQueens;
