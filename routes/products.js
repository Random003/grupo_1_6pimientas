var express = require('express');
var router = express.Router();

const path = require ('path');
const productsController = require ('../controllers/productsController')
const validateProducts = require ('../validators/products/products')

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

router.post("/", upload.single('image'), validateProducts.create, validateProducts.editProduct, validateProducts.addToCart, productsController.store);

router.get('/admin', productsController.productAdmin)

router.post("/edit", validateProducts.editProduct, validateProducts.addToCart, productsController.edit);
// para editar
router.put("/:id", upload.single('image'), validateProducts.editProduct, validateProducts.addToCart, productsController.update);
//para eliminar
router.delete('/delete/:id', productsController.destroy);


module.exports = router;