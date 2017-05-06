'use strict';
const Sequelize = require(`sequelize`);

const {
    dbPort,
    host,
    name,
    password,
    username,
} = require(`../private-config`);

const sequelize = new Sequelize(name, username, password, {
  host: host,
  port: dbPort,
  dialect: 'postgres',
  logging: false,
  pool: { maxConnections: 100, maxIdleTime: 30 },
  retry: { max: 3 },
});

module.exports = sequelize;
