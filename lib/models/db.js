'use strict';
const Sequelize = require(`sequelize`);

const dbName = process.env.DR_API_DB_NAME;
const dbUsername = process.env.DR_API_DB_USERNAME;
const dbPassword = process.env .DR_API_DB_PASSWORD;
const dbHost = process.env.DR_API_DB_HOST;
const dbPort = process.env.DR_API_DB_PORT;

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres',
  logging: false,
  pool: { maxConnections: 100, maxIdleTime: 30 },
  retry: { max: 3 },
});

sequelize.query(`
  SELECT id, name FROM "Queens"
  WHERE name = 'Jan';
`).then((v) => {
  console.log("sequelize response");
  console.log({ v: v[0]});
})

module.exports = sequelize;
