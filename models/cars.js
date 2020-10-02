/**
 * Define Individu model
 */
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Car = sequelize.define('vehicules', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    marques: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    puissance: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    annee: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, { timestamps: true });

module.exports = Car;