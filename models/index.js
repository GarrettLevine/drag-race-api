'use strict';

const db = require('./db');

const Challenge = require('./Challenge');
const Episode = require('./Episode');
const Lipsync = require('./Lipsync');
const Season = require('./Season');
const Queen = require('./Queen');
const QueensSeasons = require('./QueensSeasons');
const QueensEpisodes = require('./QueensEpisodes');

Challenge.hasMany(Queen, { through: 'ChallengeWinners', foreignkey: 'challengeId' });
Queen.belongsToMany(Challenge, { through: 'ChallengeWinners', foreignKey: 'queenId' })

Challenge.belongsTo(Episode, { foreignkey: 'challengeId' });
Episode.hasMany(Challenge, { foreignkey: 'episodeId' });

Queen.belongsToMany(Episode, { through: QueensEpisodes, foreignkey: 'queenId' });
Episode.belongsToMany(Queen, { through: QueensEpisodes, foreignKey: 'episodeId' });

Queen.belongsToMany(Season, { through: QueensSeasons, foreignKey: 'queenId' });
Season.belongsToMany(Queen, { through: QueensSeasons, foreignKey: 'seasonId' });

Episode.belongsTo(Season, { foreignKey: 'seasonId'});
Season.hasMany(Episode, { foreignKey: 'seasonId' });



const model = db.sync();

module.exports = {
  db,
  model,
  Challenge,
  Lipsync,
  Episode,
  Season,
  Queen,
};
