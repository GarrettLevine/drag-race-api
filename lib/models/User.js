const Sequelize = require(`sequelize`);
const db = require(`./db`);

const User = db.define(`User`, {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = User;
