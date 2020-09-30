const { Sequelize } = require('sequelize');
const db={}

// Option 1: Passing a connection URI

const sequelize = new Sequelize({ // nom de la BDD, username, password
    dialect: 'sqlite',
    storage: './cars.db'

});
//on exporte pour utiliser notre connexion depuis les autre fichiers.
try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}




db.sequelize=sequelize
db.Sequelize=Sequelize

module.exports = db;