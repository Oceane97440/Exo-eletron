const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const carsController = require('../controllers/controller.cars');




  router.get("/", carsController.index);
//   router.post("/add", carsController.entite_add);

//   router.get("/edit/:id",carsController.entite_edit)
//   router.post("/update/:id",carsController.entite_update)
//   router.get('/delete/:id',carsController.entite_delete)

  module.exports = router;