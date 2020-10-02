const express     = require('express');
const expressApp  = express();
const http        = require('http').Server(expressApp);
var router = express.Router();

const individuController = require('../controllers/controller.index');


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express et electron' });
//   });


  router.get("/", individuController.index);
  router.get("/signup", individuController.signup);
  router.post("/signup/add", individuController.signup_add);

 // router.get("/test", individuController.test);

  module.exports = router;