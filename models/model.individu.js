const sequelize = new Sequelize('sequelize');

const sequelize = require('./../db').sequelize;


const individus = sequelize.define('individus', {

    id: {type: Sequelize.INTEGER, autoIncrement:true, primaryKey:true },
    nom: {type: Sequelize.STRING(20),allowNull:false},
    prenom: {type: Sequelize.STRING(20),allowNull:false},
    email: {type: Sequelize.STRING(20),allowNull:false},
    mdp: {type: Sequelize.STRING(255),allowNull:false},
    fonction: {type: Sequelize.STRING(255),allowNull:false},
    role: {type: Sequelize.BIGINT,allowNull:false},


},
{tableName: 'individus', underscored: true, timestamps: false}
);

module.exports = individus;