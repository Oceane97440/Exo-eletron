'use strict';
module.exports = (sequelize, DataTypes) => {
    const individu = sequelize.define('individu', {
        
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        email:DataTypes.STRING,
        mdp:DataTypes.STRING,
        fonction:DataTypes.STRING,
        role:DataTypes.BIGINT


    }, {
        tableName: 'individu',
      timestamps: false
    });
    // entite.associate = function(models) {
    //   // associations can be defined here
    // };
    return individu;
  };

