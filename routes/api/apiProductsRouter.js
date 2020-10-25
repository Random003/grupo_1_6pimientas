const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


/* Páginas de productos */

router.post("/amountSales", apiProductsController.amountSales)
router.post("/lastProduct", apiProductsController.lastProduct); 
router.post("/:id", apiProductsController.productsAll); 
router.post("/", apiProductsController.productsAll); 


 

module.exports = router;