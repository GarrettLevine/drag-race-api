const {
  Queen,
  Lipsync,
} = require(`models`);

const {
  formatLipsync,
  errorHandler: eh,
} = require(`utils`);

function getLipsyncById(req, res) {
  const { id } = req.params;

  return Lipsync.findById(id, {
    include: [{
      model: Queen,
      through: {
        attributes: [`won`],
      },
    }],
  })
  .then(lipsync => {
    if (!lipsync) return Promise.reject(eh.noLipsyncWithId(id));

    res.json(formatLipsync(lipsync));
  })
  .catch(err => res.status(500).json(eh.handleError(err)));
}

module.exports = getLipsyncById;
