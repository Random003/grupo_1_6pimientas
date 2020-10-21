const express = require('express');
const router = express.Router();
const apiSalesController = require('../../controllers/api/apiSalesController');


/* Páginas de productos */
router.get("/", (req, res) =>{ res.redirect('/')}); 

router.post("/:id", apiSalesController.salesAll); 

router.post("/", apiSalesController.salesAll); 

 

module.exports = router;