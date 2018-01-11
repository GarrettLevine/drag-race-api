const eh = {};
const Raven = require('raven');

eh.adminCode = () => 'You must have an admin code';

eh.noQueenWithId = id => `No queen found with the id: ${id}`;

eh.noSeasonWithId = id => `No season found with the id: ${id}`;

eh.noEpisodesInSeason = id => `No episodes in season with id: ${id}`;

eh.noEpisodeWithId = id => `No episode found with the id: ${id}`;

eh.noChallengeWithId = id => `No challenge found with the id: ${id}`;

eh.noLipsyncWithId = id => `No lipsync found with the id: ${id}`;

eh.typeMissMatch = (value, expected, provided) => `expected ${value} provided to be a ${expected}, found a ${provided}`;

eh.requestLimit = n => `Request limit is 50. You requested ${n}`;

eh.serverError = () => `internal server error. Please report a bug or try again later`;

eh.handleError = (err) => {
  Raven.captureException(err);
  if (typeof err !== 'string') return { error: { message: eh.serverError() } };

  return { error: { message: err } }
};

module.exports = eh;

