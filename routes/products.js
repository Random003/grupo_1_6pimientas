var express = require('express');
var router = express.Router();

const path = require ('path');
const productsController = require ('../controllers/productsController')

const multer = require('multer');
var storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/products'),
    filename: function (req, file, cb) {
      cb(null, 'product' + '-' + Date.now() + path.extname(file.originalname))
    }
  });
   
var upload = multer({ storage });

/* Páginas de productos */

router.get("/", productsController.products);
  
  
router.get("/productCart", productsController.productCart);
  
router.get("/add", productsController.add);

router.post("/", upload.single('imagen'), productsController.store); 

router.get("/edit/:productId", productsController.edit);

router.put("/edit/:productId", productsController.edit); 

//router.delete('/:productId', productsController.destroy); 

module.exports = router;