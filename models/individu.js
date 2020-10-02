/**
 * Define Individu model
 */
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Individu = sequelize.define('individu', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    prenom: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mdp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fonction: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { timestamps: true });

module.exports = Individu;