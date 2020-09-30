const sqlite3=require('sqlite3')
const dbname="cars.db"

//const Users = require('../models/model.individu');



exports.index = (req, res) => {



 res.render('index.ejs')


};



exports.signup = (req, res) => {



    res.render('signup.ejs')
   
   
   };

   exports.test = async(req, res) => {

    let db=new sqlite3.Database(dbname,err=>{

        if(err)
        throw err
        console.log('Database cars'+dbname)
        db.all('SELECT * FROM individus',(err,data)=>{

            res.send(data)

            console.log(data)
        })

    })

    // await Users.findAll({}).then(user => {
    //       res.send(user)
       
    //   });

   
   };