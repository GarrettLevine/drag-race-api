const {
  Challenge,
  Episode,
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
  console.log('get queen by id endpoint');
  return Queen.findByPk(id, {
      include: [
        {
          model: Challenge,
          through: {
            attributes: ['won'],
          },
        },
        { model: Episode },
        {
          model: Lipsync,
          through: {
            attributes: ['won'],
          },
        },
        {
          model: Season,
          through: {
            attributes: ['place'],
          },
        },
      ],
    })
    .then(queen => {
      if (!queen) return Promise.reject(eh.noQueenWithId(id));
      console.log('get queen by ID complete');
      res.json(formatQueen(queen));
    })
    .catch(err => {
      console.log({ err });
      res.status(400).json(eh.handleError(err))
    });
}

module.exports = getQueenById;
