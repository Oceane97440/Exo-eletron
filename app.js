const express = require('express');
const path = require('path');
const expressApp = express();
const { Sequelize } = require('sequelize');


var app = {};

/** view engine setup*/
 

/* assets sera le répertoire où se trouverons nos fichiers côté client */
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.use(express.static(path.join(__dirname, 'assets')));

expressApp.use(express.static(__dirname + '/public'));
expressApp.set('view engine', 'ejs');
//app.use(csv());
expressApp.use(express.static('public'));



const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cars.db'
});
try {
    sequelize.authenticate();
   console.log('Connection has been established successfully.');
 } catch (error) {
   console.error('Unable to connect to the database:', error);
 }
 
 
function start(callback) {
    init(function() {
        /* On démarre le routeur défini juste avant */
        app.router.start(function() {
            if(typeof callback != 'undefined') {
                callback();
            }
        });
    });
}
 
function init(callback) {
    /* On instancie notre module router */
    app.router = require('./routes/router');
 
    if(typeof callback != 'undefined') {
        callback();
    }
}
 module.exports = sequelize;
module.exports = {
    start: start,
};

