var express = require('express');
var router = express.Router();
const path = require ('path');
const productsController = require ('../controllers/productsController')

/* Páginas de productos */

router.get("/productDetail1", productsController.product1);
  
router.get("/ProductDetail2", productsController.product2);
  
router.get("/productCart", productsController.productCart);
  
router.get("/promociones", productsController.promociones);

router.get("/add", productsController.add);

router.get("/edit", productsController.edit);

module.exports = router;
