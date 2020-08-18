var express = require('express');
var router = express.Router();
const salesController = require ('../controllers/salesController')

/* GET home page. */
router.get('/', salesController.index);

router.get('/sales', salesController.index);

//router.post("/", indexController.indexPop);

//router.get('/home', indexController.home); en construcción

module.exports = router;