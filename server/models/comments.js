const { Sequelize } = require('sequelize');
const sequelize = require('./index.js');

const Project = sequelize.define(
    'Project',
    {
        ID_KEY: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        // Model attributes are defined here
        User_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        Project_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Project;
