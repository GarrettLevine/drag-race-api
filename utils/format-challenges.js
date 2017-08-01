const formatChallenges = challenge => {
  return {
    id: challenge.id,
    type: challenge.type,
    description: challaenge.description,
    prize: challenge.prize,
    episodeId: challenge.episodeId,
  };
}

module.exports = formatChallenges;