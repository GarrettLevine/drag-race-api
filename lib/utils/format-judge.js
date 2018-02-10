const formatJudge = j => {
  if (typeof j !== `object`) return {};
  const judge = {
    id: j.id,
    name: j.name,
    bio: j.bio,
    img_url: j.image_url,
    type: j.type
  };
  if (j.Episodes) {
    judge.episodes = j.Episodes.map(e => ({
      id: e.id,
      title: e.title,
      episodeInSeason: e.episodeInSeason,
      seasonId: e.seasonId,
      airDate: e.airDate
    }));
  }
  return judge;
};

module.exports = formatJudge
