const controller_fiches = {};
const Fiche_km = require('../models/fiches_km');


controller_fiches.index = async (req, res, next) => {

//  datetime('YYYY-MM-DD HH:MM')
   try {
      await Fiche_km.findAll({}).then(fiches => {
         //  res.send(campaigns)
         res.render('fiches/list_fiches', {
          fiches: fiches,
         });
       });

    
     
   } catch (error) {
      console.log(error)
   }




}

controller_fiches.fiches_add = async (req, res) => {

   var date = req.body.date
   var trajet_start = req.body.trajet_start
   var trajet_end =req.body.trajet_end
   var motif=req.body.motif
   var commentaire=req.body.commentaire
   var compteur_start=req.body.compteur_start
   var compteur_end=req.body.compteur_end
   var distance=compteur_end - compteur_start



 

   console.log(req.body)

   try {


      await Fiche_km.create({
        date: date,
        trajet_start: trajet_start,
        trajet_end:trajet_end,
        motif:motif,  
        commentaire:commentaire ,    
        compteur_start:compteur_start,
        compteur_end:compteur_end,
        distance:distance

      }).then(res.send("Add fiches"))


   } catch (error) {
      console.log(error)
   }



}


controller_fiches.fiches_edit = async (req, res) => {
   var id = req.params.id;

   await Fiche_km.findOne({
     where: {
       id: id
     }
 
   }).then(fiche => {
 
     res.render('fiches/edit', {
      fiche: fiche,
     })
   })

}

controller_fiches.fiches_update = async (req, res) => {

  var id = req.params.id;

  var date = req.body.date
  var trajet_start = req.body.trajet_start
  var trajet_end =req.body.trajet_end
  var motif=req.body.motif
  var commentaire=req.body.commentaire
  var compteur_start=req.body.compteur_start
  var compteur_end=req.body.compteur_end
  var distance=compteur_end - compteur_start

 
   try {
 
 
     await Fiche_km.findOne({
       where: {
         id: id
       }
 
     }).then(() => {
       Fiche_km.update({

        date: date,
        trajet_start: trajet_start,
        trajet_end:trajet_end,
        motif:motif,  
        commentaire:commentaire ,    
        compteur_start:compteur_start,
        compteur_end:compteur_end,
        distance:distance    

       }, {
         where: {
           id: id
         }
 
       }).then(
         res.send('Modif fiche')
         // res.send('Update' + id)
 
       ).catch(function (error) {
         console.log(error);
       });
 
     })
   } catch (error) {
     console.error(error)
 
 
 
 
   }
   
}





controller_fiches.fiches_delete = async (req, res) => {
   var id = req.params.id;
   try {

      await Fiche_km.destroy({
         where: {
           id: id
         }
       }).then(() => {
         // console.log(response)
         res.redirect('/fiches')
       })

   } catch (error) {
      console.log(error)
   }

  
}



















module.exports = controller_fiches;