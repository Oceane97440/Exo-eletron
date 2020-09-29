const express = require('express');
const path = require('path');
const expressApp = express();

var app = {};

/** view engine setup*/
 

/* assets sera le répertoire où se trouverons nos fichiers côté client */
expressApp.set('views', path.join(__dirname, 'views'));
expressApp.use(express.static(path.join(__dirname, 'assets')));

expressApp.use(express.static(__dirname + '/public'));
expressApp.set('view engine', 'ejs');
//app.use(csv());
expressApp.use(express.static('public'));


 
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
 
module.exports = {
    start: start
};