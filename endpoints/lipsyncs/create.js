const {
  Episode,
  Lipsync,
} = require('models');

function create(req, res) {
  let lipsync;
  return Lipsync.create({
    name: req.body.name,
    artist: req.body.artist,
    episodeId: req.body.episodeId,
  })
  .then((l) => {
    lipsync = l;
    return Episode.findById(req.body.episodeId);
  })
  .then((episode) => lipsync.addEpisode(episode))
  .then(lipsync => res.json(lipsync))
  .catch(err => res.json(err));
}

module.exports = create;
