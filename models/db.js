'use strict';
const Sequelize = require(`sequelize`);

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env .DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.PORT;
console.log(dbName, dbUsername, dbPort, dbHost, dbPort);

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres',
  logging: false,
  pool: { maxConnections: 100, maxIdleTime: 30 },
  retry: { max: 3 },
});

module.exports = sequelize;
