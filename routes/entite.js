const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const entiteController = require('../controllers/controller.entite');




  router.get("/", entiteController.index);
  router.post("/add", entiteController.entite_add);

  router.get("/edit/:id",entiteController.entite_edit)
  router.post("/update/:id",entiteController.entite_update)
  router.get('/delete/:id',entiteController.entite_delete)

  module.exports = router;