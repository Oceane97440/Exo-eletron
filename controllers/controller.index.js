const controller = {};
const Individus = require('../models/individu');


//model
controller.index = async (req, res, next) => {

   // try {
   //    const users = await Individus.findAll({});
   //    //console.log(users)
   //    res.send(users)
     
   // } catch (error) {
   //    console.log(error)
   // }

   res.render('index.ejs')


}



controller.signup = (req, res) => {



   res.render('signup.ejs')


};

controller.signup_add = async (req, res) => {

   var nom = req.body.nom
   var prenom = req.body.prenom
   var email = req.body.email
   var mdp = req.body.mdp
   var fonction = req.body.fonction

   console.log(req.body)

   try {


      await Individus.create({
         nom: nom,
         prenom: prenom,
         email: email,
         mdp: mdp,
         fonction: fonction,
         role: false

      }).then(res.send("Add user"))


   } catch (error) {
      console.log(error)
   }



}

module.exports = controller;