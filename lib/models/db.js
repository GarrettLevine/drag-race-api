'use strict';
const Sequelize = require(`sequelize`);

const dbName = process.env.DR_API_DB_NAME;
const dbUsername = process.env.DR_API_DB_USERNAME;
const dbPassword = process.env .DR_API_DB_PASSWORD;
const dbHost = process.env.DR_API_DB_HOST;
const dbPort = process.env.DR_API_DB_PORT;

let sequelize;
try {
  sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialectOptions: {
      "ssl": true,
    },
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 10,
      min: 1,
    },
    retry: { max: 3 },
    // logging: (m) => { console.log(`\n ${m} \n`) },
  });

} catch (err) {
  console.log({ error: `sequelize error: ${err.message}`});
}

module.exports = sequelize;
