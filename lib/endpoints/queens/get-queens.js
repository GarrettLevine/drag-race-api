const { Queen } = require('models');

const {
  formatQueen,
  formatQueenQuery,
  errorHandler: eh,
} = require('utils');

function getQueens(req, res) {
  console.log('get queen endpoint');
  return Queen.findAll(formatQueenQuery(req.query))
    .then(queens => {
      console.log('get db complete');
      const formatedQueens = queens
        .map(queen => formatQueen(queen));
      res.json(formatedQueens);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getQueens;
