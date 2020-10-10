const controller_cars = {};
const Cars = require('../models/cars');


controller_cars.index = async (req, res, next) => {

   try {
      await Cars.findAll({}).then(cars => {
         //  res.send(campaigns)
         res.render('cars/list_cars', {
            cars: cars,
         });
       });

    
     
   } catch (error) {
      console.log(error)
   }




}

controller_cars.cars_add = async (req, res) => {

   var marque = req.body.marque
   var model = req.body.model
   var puissance=req.body.puissance
   var annee=req.body.annee
 

   console.log(req.body)

   try {


      await Cars.create({
         marque: marque,
         model: model,
         puissance:puissance,
         annee:annee      

      }).then(res.send("Add cars"))


   } catch (error) {
      console.log(error)
   }



}

controller_cars.cars_edit = async (req, res) => {
   var id = req.params.id;

   await Cars.findOne({
     where: {
       id: id
     }
 
   }).then(car => {
 
     res.render('cars/edit', {
      car: car,
     })
   })

}


controller_cars.cars_update = async (req, res) => {
   var id = req.params.id;
   var marque = req.body.marque
   var model = req.body.model
   var puissance=req.body.puissance
   var annee=req.body.annee

 
   try {
 
 
     await Cars.findOne({
       where: {
         id: id
       }
 
     }).then(() => {
       Cars.update({

         marque: marque,
         model: model,
         puissance:puissance,
         annee:annee      

       }, {
         where: {
           id: id
         }
 
       }).then(
         res.send('Modif cars')
         // res.send('Update' + id)
 
       ).catch(function (error) {
         console.log(error);
       });
 
     })
   } catch (error) {
     console.error(error)
 
 
 
 
   }
   
}



controller_cars.cars_delete = async (req, res) => {
   var id = req.params.id;
   try {

      await Cars.destroy({
         where: {
           id: id
         }
       }).then(() => {
         // console.log(response)
         res.send("La fiche cars a bien était supprimé")
       })

   } catch (error) {
      console.log(error)
   }

  
}




















module.exports = controller_cars;