var express = require('express');
var router = express.Router();
const path = require ('path');

/* Páginas de productos */

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/productDetail1", (req, res) => {
    res.render('productDetail1');
});
  
router.get("/ProductDetail2", (req, res) => {
    res.render('productDetail2');
});
  
router.get("/productCart", (req, res) => {
    res.render('productCart');
});
  
router.get("/promociones", (req, res) => {
    res.render("promociones");
});


module.exports = router;
