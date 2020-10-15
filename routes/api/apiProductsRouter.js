const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


/* Páginas de productos */
router.get("/", (req, res) =>{ res.redirect('/')}); 

router.post("/", apiProductsController.productsAll); 

router.post("/:id", apiProductsController.productsAll); 
 

module.exports = router;