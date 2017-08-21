const {
  Episode,
  Judge,
} = require('models');

function create(req, res) {
  let judge;

  return Judge.create({
  	name: req.body.name,
  	episodeId: req.body.episodeId,
  })
  .then(j => {
    judge = j;
  	console.log(judge);
    const episodesArray = req.body.episodes
      .map(episode => Episode.findById(episode.id));
    console.log(episodesArray);
    
    return Promise.all(episodesArray);
  })
  .then(judge => res.json(judge))
  .catch(err => res.json(err));
}

module.exports = create;
