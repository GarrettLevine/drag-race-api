'use strict';

const db = require('./db');

const Challenge = require('./Challenge');
const Episode = require('./Episode');
const Judge = require('./Judge');
const Lipsync = require('./Lipsync');
const Season = require('./Season');
const Queen = require('./Queen');
const OhHoney = require('./OhHoney');
const QueensChallenges = require('./QueensChallenges');
const QueensSeasons = require('./QueensSeasons');
const QueensEpisodes = require('./QueensEpisodes');
const QueensLipsyncs = require(`./QueensLipsyncs`);

Lipsync.belongsTo(Episode, { foreignKey: 'episodeId' });
Episode.hasMany(Lipsync, { foreignKey: 'episodeId' });

Lipsync.belongsToMany(Queen, { through: QueensLipsyncs, foreignKey: `lipsyncId` });
Queen.belongsToMany(Lipsync, { through: QueensLipsyncs, foreignKey: `queenId` });

Queen.belongsToMany(Challenge, { through: QueensChallenges, foreignKey: 'queenId' });
Challenge.belongsToMany(Queen, { through: QueensChallenges, foreignkey: 'challengeId' });

Queen.belongsToMany(Season, { through: QueensSeasons, foreignKey: 'queenId' });
Season.belongsToMany(Queen, { through: QueensSeasons, foreignKey: 'seasonId' });

Queen.belongsToMany(Episode, { through: QueensEpisodes, foreignKey: 'queenId' });
Episode.belongsToMany(Queen, { through: QueensEpisodes, foreignKey: 'episodeId' });

Episode.belongsTo(Season, { foreignKey: 'seasonId'});
Season.hasMany(Episode, { foreignKey: 'seasonId' });

Judge.belongsToMany(Episode, { through: 'EpisodesJudges', foreignKey: 'judgeId', });
Episode.belongsToMany(Judge, { through: 'EpisodesJudges', foreignKey: 'episodeId', });

OhHoney.belongsTo(Queen, { foreignKey: `queenId` });
Queen.hasMany(OhHoney, { foreignKey: `queenId` } );


const model = db.sync();

module.exports = {
  db,
  model,
  Challenge,
  Judge,
  Lipsync,
  Episode,
  Season,
  Queen,
  QueensLipsyncs,
  OhHoney,
};
