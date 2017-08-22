const formatLipsync = lipsync => {
  if (typeof lipsync !== `object`) return {};

  return {
    id: lipsync.id,
    name: lipsync.name,
    artist: lipsync.artist,
    episodeId: lipsync.episodeId
  };
};

module.exports = formatLipsync;
