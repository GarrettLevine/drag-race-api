const u = {};

u.errorHandler = require('./error-handler');
u.formatChallenge = require('./format-challenge');
u.formatQueen = require('./format-queen');
u.formatSeason = require('./format-season');
u.formatEpisode = require(`./format-episode`);
u.formatLipsync = require(`./format-lipsync`);

module.exports = u;
