const { Sequelize } = require('sequelize');
const sequelize = require('./index.js');

const User = sequelize.define('User', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    // Model attributes are defined here
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    emial: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    repassword: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: Sequelize.STRING(20),
        allowNull: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    birthdate: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = User;
