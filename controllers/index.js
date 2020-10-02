const path        = require('path');
const controller = {}; 
const { Sequelize, DataTypes, models } = require('sequelize');
const individus = require('../models').individu;


//model


controller.index = async(req, res) => {

   var users = await individus.findAll();

    console.log(users)
  
 //res.render('index.ejs')


}



// exports.signup = (req, res) => {



//     res.render('signup.ejs')
   
   
//    };

  
   module.exports = controller;