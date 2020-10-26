/**
 * Define Individu model
 */
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../config/database');

const Fiches = sequelize.define('fiches_km', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        
    },
    trajet_start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    trajet_end: {
        type: DataTypes.DATE,
        allowNull: false
    },
    motif: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commentaire: {
        type: DataTypes.STRING,
        allowNull: false
    },
    compteur_start: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    compteur_end: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    distance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
   
}, { timestamps: true });

module.exports = Fiches;