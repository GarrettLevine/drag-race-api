const {
  Episode,
  Judge,
} = require('models');

function create(req, res) {
  let judge;

  return Judge.create({
  	name: req.body.name,
    image_url: req.body.image_url,
    bio: req.body.bio,
    regular: req.body.regular,
  })
  .then(j => {
    judge = j;
    const episodesArray = req.body.episodes
      .map(episode => Episode.findById(episode.id));
    return Promise.all(episodesArray);
  })
  .then(episodes => {
      return Promise.all(episodes.map(e => judge.addEpisode(e)))
    }
  )
  .then(judge => res.json(judge))
  .catch(err => res.json(err));
}

module.exports = create;
