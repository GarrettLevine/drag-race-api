const formatLipsync = lipsync => {
  if (typeof lipsync !== `object`) return {};

  return {
    id: lipsync.id,
    name: lipsync.name,
    artist: lipsync.artist,
    episodeId: lipsync.episodeId,
    seasonId: lipsync.seasonId,
    winningQueenId: lipsync.winningQueenId,
    eliminatedQueenId: lipsync.eliminatedQueenId,
  };
};

module.exports = formatLipsync;
