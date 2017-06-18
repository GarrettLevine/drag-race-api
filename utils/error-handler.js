const eh = {};

eh.noQueenWithId = id => ({
    error: { message: `No queen found with the id: ${id}` },
});

eh.noSeasonWithId = id => ({
    error: { message: `No season found with the id: ${id}` },
});

eh.noEpisodeWithId = id => ({
  error: { message: `No episode found with the id: ${id}`},
});

eh.noChallengeWithId = id => ({
  error: { message: `No challenge found with the id: ${id}`},
});

module.exports = eh;

