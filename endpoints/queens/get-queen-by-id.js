const {
  Challenge,
  Lipsync,
  Season,
  Queen,
} = require('models');

const {
  formatQueen,
  errorHandler: eh,
} = require('utils')

function getQueenById(req, res) {
  const { id } = req.params;

  return Queen.findById(id, {
      include: [
        {
          model: Season,
          through: {
            attributes: ['place'],
          },
        },
        {
          model: Lipsync,
          through: {
            attributes: ['won'],
          },
        },
        {
          model: Challenge,
          through: {
            attributes: ['won'],
          },
        },
      ],
    })
    .then(queen => {
      if (!queen) return Promise.reject(eh.noQueenWithId(id));
      res.json(formatQueen(queen));
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getQueenById;
