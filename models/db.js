'use strict';
const Sequelize = require(`sequelize`);

const {
    port,
    host,
    name,
    password,
    username,
} = require(`private-config`);

const dbName = process.env.DB_NAME || name;
const dbUsername = process.env.DB_USERNAME || username;
const dbPassword = process.env .DB_PASSWORD || password;
const dbHost = process.env.DB_HOST || host;
const dbPort = process.env.PORT || port;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres',
  logging: false,
  pool: { maxConnections: 100, maxIdleTime: 30 },
  retry: { max: 3 },
});

module.exports = sequelize;
