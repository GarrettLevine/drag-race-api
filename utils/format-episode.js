const formatEpisode = episode => {
  if (typeof episode !== `object`) return {};

  return {
    id: episode.id,
    title: episode.title,
    episodeInSeason: episode.episodeInSeason,
    seasonId: episode.seasonId,
    airDate: episode.airDate,
  };
};

module.exports = formatEpisode;
