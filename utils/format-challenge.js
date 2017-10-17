const formatChallenges = challenge => {
  console.log(challenge);
  return {
    id: challenge.id,
    type: challenge.type,
    description: challenge.description,
    prize: challenge.prize,
    episodeId: challenge.episodeId,
    queens: challenge.Queens.map(queen => {
      console.log(queen);
      return {
        id: queen.id,
        name: queen.name,
      };
    }),
  };
}

module.exports = formatChallenges;