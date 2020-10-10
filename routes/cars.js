const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const carsController = require('../controllers/controller.cars');




  router.get("/", carsController.index);
  router.post("/add", carsController.cars_add);

 router.get("/edit/:id",carsController.cars_edit)
router.post("/update/:id",carsController.cars_update)
  router.get('/delete/:id',carsController.cars_delete)

  module.exports = router;