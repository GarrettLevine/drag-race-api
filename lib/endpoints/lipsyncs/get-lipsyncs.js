const {
  Queen,
  Lipsync,
} = require(`models`);

const {
  formatLipsync,
  errorHandler: eh,
} = require(`utils`);

function getLipsyncs(req, res) {
  return Lipsync.findAll({
    limit: req.query.limit || 20,
    offset: req.query.offset || 0,
    include: [{
      model: Queen,
      through: {
        attributes: [`won`],
      },
    }],
  })
  .then(lipsyncs => {
    const formattedLipsyncs = lipsyncs.map(lipsync => formatLipsync(lipsync));
    
    res.json(formattedLipsyncs);
  })
  .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getLipsyncs;
