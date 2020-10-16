const express = require('express');
const router = express.Router();
const apiSalesController = require('../../controllers/api/apiSalesController');


/* Páginas de productos */
router.get("/", (req, res) =>{ res.redirect('/')}); 

router.post("/", apiSalesController.salesAll); 

router.post("/:id", apiSalesController.salesAll); 
 

module.exports = router;