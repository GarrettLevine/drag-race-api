const formatEpisode = episode => {
  if (typeof episode !== `object`) return {};

  return {
    id: episode.id,
    title: episode.title,
    episodeInSeason: episode.episodeInSeason,
    seasonId: episode.seasonId,
    airDate: episode.airDate,
    lipsyncSongId: episode.lipsyncSongId,
    eliminatedQueenId: episode.eliminatedQueenId,
  };
};

module.exports = formatEpisode;
