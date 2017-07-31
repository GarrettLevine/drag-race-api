'use strict';

const db = require('./db');

const Challenge = require('./Challenge');
const Episode = require('./Episode');
const Lipsync = require('./Lipsync');
const Season = require('./Season');
const Queen = require('./Queen');
const QueensChallenges = require('./QueensChallenges');
const QueensSeasons = require('./QueensSeasons');
const QueensEpisodes = require('./QueensEpisodes');

Challenge.belongsToMany(Queen, { through: QueensChallenges, foreignkey: 'challengeId' });
Queen.belongsToMany(Challenge, { through: QueensChallenges, foreignKey: 'queenId' });

Episode.belongsToMany(Lipsync, { through: 'EpisodesLipsyncs', foreignkey: 'episodeId' });
Lipsync.belongsToMany(Episode, { through: 'EpisodesLipsyncs', foreignKey: 'lipsyncId' });

Queen.belongsToMany(Season, { through: QueensSeasons, foreignKey: 'queenId' });
Season.belongsToMany(Queen, { through: QueensSeasons, foreignKey: 'seasonId' });

Queen.belongsToMany(Episode, { through: QueensEpisodes, foreignKey: 'queenId' });
Episode.belongsToMany(Queen, { through: QueensEpisodes, foreignKey: 'episodeId' });

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
