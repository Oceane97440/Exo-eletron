/**
 * Define Individu model
 */
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Entite = sequelize.define('entites', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    entite_name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    entite_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, { timestamps: true });

module.exports = Entite;