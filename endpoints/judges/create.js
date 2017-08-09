const {
  Episode,
  Judge,
} = require('models');

function create(req, res) {
  return Judge.create({
  	name: req.body.name,
  	episodeId: req.body.episodeId,
  })
  .then(j => {
  	console.log(j);
  })
  .then(judge => res.json(judge))
  .catch(err => res.json(err));
}

module.exports = create;