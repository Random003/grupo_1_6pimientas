var express = require('express');
var router = express.Router();
const errorController = require ('../controllers/errorsControllers')

router.get("*", errorController.all);
  
module.exports = router;