var express = require('express');
var router = express.Router();


const salesController = require ('../controllers/salesController')
const validateSales = require ('../validators/sales/sales')
/////
const path = require ('path');
////
const multer = require('multer');
const indexController = require('../controllers/indexController');
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/sales'),
    filename: function (req, file, cb) {
      cb(null, 'sales' + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
var upload = multer({ storage });

/* GET home page. */
//router.get('/', salesController.sales);

router.get('/', salesController.sales);

router.get("/add", salesController.add);

router.post("/", upload.single('imagen'), validateSales.create, validateSales.editSale, salesController.store);

router.get('/admin', salesController.salesAdmin)

router.get("/editSales/:id", validateSales.create, validateSales.editSale, salesController.edit);

router.put("/:id", upload.single('image'), validateSales.create, validateSales.editSale, salesController.update); 

router.delete('/delete/:id', salesController.destroy)


module.exports = router;