const app = require('./app');
const sqlite3 = require('sqlite3').verbose();
const dbname = 'database.db'
// open database in memory


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


let db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to SQlite' + dbname);
    //db.run('CREATE TABLE individus(nom VARCHAR(255))')
    // db.run('INSERT INTO individus(nom) VALUES(?)',["Joris"])
    // db.all=[array avec les value] [ { nom: 'Joris' }, { nom: 'Marie' } ]
    //db.each =retour que les objet { nom: 'Joris' }{ nom: 'Marie' }
    db.each('SELECT*FROM individus', (err, data) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(data);
    });
    
//db.run('INSERT INTO individus(nom) VALUES(?)',["Marie"]) 
})
// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
/* Démarre uniquement l'application Express */
app.start();