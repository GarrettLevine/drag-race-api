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

  return Queen.findById(id)
    .then((queen) => {
      if (!queen) return Promise.reject(eh.noQueenWithId(id));

      return Lipsync.findAll({
        include: [{
          model: Queen,
          where: {
            id,
          },
          through: {
            attributes: [`won`],
          },
        }],
      });
    })
    .then(lipsyncs => {
      const formattedLipsyncs = lipsyncs.map(lipsync => formatLipsync(lipsync));

      res.json(formattedLipsyncs);
    })
    .catch(err => res.status(400).json(eh.handleError(err)));
}

module.exports = getQueenLipsyncs;
