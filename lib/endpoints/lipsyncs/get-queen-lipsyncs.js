const {
  Queen,
  Lipsync,
} = require(`models`);

const {
  errorHandler: eh,
  formatLipsync,
} = require(`utils`);

function getQueenLipsyncs(req, res) {
  const { id } = req.params;

  return Queen.findByPk(id)
    .then(queen => queen.getLipsyncs({
      include: [{
        model: Queen,
      }],
      through: {
        attributes: [`won`],
      },
    }))
    .then(lipsyncs => {
      const formattedLipsyncs = lipsyncs.map(lipsync => formatLipsync(lipsync));

      res.status(200).json(formattedLipsyncs);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getQueenLipsyncs;
