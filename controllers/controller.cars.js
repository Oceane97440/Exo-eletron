const controller = {};
const Cars = require('../models/cars');


//model
controller.index = async (req, res, next) => {

   try {
      const cars = await Cars.findAll({});
      //console.log(users)
      res.send(cars)
     
   } catch (error) {
      console.log(error)
   }

  // res.render('index.ejs')


}




module.exports = controller;