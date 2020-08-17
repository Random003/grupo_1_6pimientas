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
   
var upload = multer({ storage: storage });

/* Páginas de productos */

router.get("/productDetail1", productsController.product1);
  
router.get("/ProductDetail2", productsController.product2);
  
router.get("/productCart", productsController.productCart);
  
router.get("/promociones", productsController.promociones);

//router.put('/edit/:idPromociones', productsController.promociones)  Gaspar

router.get("/add", productsController.add);

router.post("/", upload.single('imagen'), productsController.store);

router.get("/edit/:idProduct", productsController.edit);

// router.put('/edit/:productId', productsController.edit); Gaspar

module.exports = router;
