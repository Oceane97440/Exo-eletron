const app = require('./app');
const sqlite3 = require('sqlite3').verbose();
const dbname = 'database.db'
// open database in memory
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