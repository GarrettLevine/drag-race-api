const formatLipsync = lipsync => {
  if (typeof lipsync !== `object`) return {};

  return {
    id: lipsync.id,
    name: lipsync.name,
    artist: lipsync.artist,
    episodeId: lipsync.episodeId,
    queens: lipsync.Queens.map(queen => ({
        id: queen.id,
        name: queen.name,
        won: queen.QueensLipsyncs.won,
    })),
  };
};

module.exports = formatLipsync;
