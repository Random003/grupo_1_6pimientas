var express = require('express');
var router = express.Router();

const path = require ('path');
const indexController = require ('../controllers/indexController')

const multer = require('multer');
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/products'),
    filename: function (req, file, cb) {
      cb(null, 'product' + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
var upload = multer({ storage });



/* GET home page. */
router.get('/home1', indexController.home1);

router.get('/home2', indexController.home2);

//router.post("/", indexController.indexPop);


module.exports = router;
