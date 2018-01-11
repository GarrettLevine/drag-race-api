const { Queen } = require('models');

const {
  formatQueen,
  formatQueenQuery,
  errorHandler: eh,
} = require('utils');

function getQueens(req, res) {
  return Queen.findAll(formatQueenQuery(req.query))
    .then(queens => {
      const formatedQueens = queens
        .map(queen => formatQueen(queen));
      res.json(formatedQueens);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getQueens;
