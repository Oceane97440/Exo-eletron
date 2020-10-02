const controller = {};
const Entity=require('../models/entite');
const { param } = require('../routes/entite');


//model
controller.index = async (req, res, next) => {

   

   try {
      await Entity.findAll({}).then(entites => {
         //  res.send(campaigns)
         res.render('entite/list_entite', {
            entites: entites,
         });
       });
    
     
   } catch (error) {
      console.log(error)
   }

   //res.send('vue entite')


}



controller.entite_add = async (req, res) => {

   var entite_name = req.body.entite_name
   var entite_type = req.body.entite_type
 

   console.log(req.body)

   try {


      await Entity.create({
         entite_name: entite_name,
         entite_type: entite_type
        

      }).then(res.send("Add entité"))


   } catch (error) {
      console.log(error)
   }



}
controller.entite_edit = async (req, res) => {
   var id = req.params.id;

   await Entity.findOne({
     where: {
       id: id
     }
 
   }).then(entite => {
 
     res.render('entite/edit', {
      entite: entite,
     })
   })

}

controller.entite_update = async (req, res) => {
   var id = req.params.id;
   var entite_name = req.body.entite_name;
   var entite_type=req.body.entite_type;

 
   try {
 
 
     await Entity.findOne({
       where: {
         id: id
       }
 
     }).then(() => {
       Entity.update({
         entite_name: entite_name,
         entite_type:entite_type
       }, {
         where: {
           id: id
         }
 
       }).then(
         res.send('Modif entité')
         // res.send('Update' + id)
 
       ).catch(function (error) {
         console.log(error);
       });
 
     })
   } catch (error) {
     console.error(error)
 
 
 
 
   }
   
}



controller.entite_delete = async (req, res) => {
   var id = req.params.id;
   try {

      await Entity.destroy({
         where: {
           id: id
         }
       }).then(() => {
         // console.log(response)
         res.send("L'entité a bien était supprimé")
       })

   } catch (error) {
      console.log(error)
   }

  
}

module.exports = controller;