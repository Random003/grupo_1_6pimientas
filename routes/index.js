var express = require('express');
var router = express.Router();

const path = require ('path');
const indexController = require ('../controllers/indexController')

const multer = require('multer');
const { S_IFCHR } = require('constants');
const { locals } = require('../app');
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/products'),
    filename: function (req, file, cb) {
      cb(null, 'product' + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
var upload = multer({ storage });

router.get('/', indexController.home1);

module.exports = router;
