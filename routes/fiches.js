const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const fichesController = require('../controllers/controller.fiche_km');




  router.get("/", fichesController.index);
  router.post("/add", fichesController.fiches_add);

//  router.get("/edit/:id",fichesController.cars_edit)
// router.post("/update/:id",fichesController.cars_update)
//   router.get('/delete/:id',fichesController.cars_delete)

  module.exports = router;