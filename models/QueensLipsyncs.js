const Sequelize = require(`sequelize`);
const db = require(`./db`);

const QueensLipsyncs = db.define(`QueensLipsyncs`, {
  won: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = QueensLipsyncs;
