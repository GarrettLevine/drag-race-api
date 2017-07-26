const eh = {};

eh.adminCode = () => ({
  error: { message: 'You must have an admin code' },
});

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

eh.typeMissMatch = (value, expected, provided) => ({
  error: { message: `expected ${value} provided to be a ${expected}, found a ${provided}`}
});

eh.requestLimit = n => ({
  error: { message: `Request limit is 50. You requested ${n}` },
});

eh.serverError = () => ({
  error: { message: 'internal server error. Please report a bug or try again later' },
});

module.exports = eh;

