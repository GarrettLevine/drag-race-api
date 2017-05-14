'use strict';

const db = require('./db');

const Episode = require('./Episode');
const Season = require('./Season');
const Queen = require('./Queen');
const QueensSeasons = require('./QueensSeasons');

Queen.belongsToMany(Episode, { through: 'QueensEpisodes', foreignkey: 'queenId' });
Episode.belongsToMany(Queen, { through: 'QueensEpisodes', foreignKey: 'episodeId' });

Queen.belongsToMany(Season, { through: QueensSeasons, foreignKey: 'queenId' });
Season.belongsToMany(Queen, { through: QueensSeasons, foreignKey: 'seasonId' });

Episode.belongsTo(Season, { foreignKey: 'seasonId'});
Season.hasMany(Episode, { foreignKey: 'seasonId' });

const model = db.sync();

module.exports = {
  db,
  model,
  Episode,
  Season,
  Queen,
};
