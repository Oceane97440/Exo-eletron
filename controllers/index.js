const controller = {}; 
const Individus = require('../models/individu');


//model
controller.index = async(req, res, next) => {

   try {
      const users = await Individus.findAll();
      console.log(users)
   } catch (error) {
      console.log(error)
   }
  
 //res.render('index.ejs')


}



// exports.signup = (req, res) => {



//     res.render('signup.ejs')
   
   
//    };

  
   module.exports = controller;