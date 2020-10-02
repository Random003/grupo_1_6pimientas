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
router.post("/", upload.single('image'), productsController.store); 
 
router.get("/productCart", productsController.productCart);
  
router.get("/add", productsController.add);

<<<<<<< HEAD
=======
router.post("/", upload.single('image'), validateProducts.create, validateProducts.editProduct, validateProducts.addToCart, productsController.store);
>>>>>>> 1f2059ebb2ec5001ed051e92d4bdf661d07cd1a9

router.get('/admin', productsController.productAdmin)

router.post("/edit", validateProducts.editProduct, validateProducts.addToCart, productsController.edit);
// para editar
router.put("/:id", upload.single('image'), validateProducts.editProduct, validateProducts.addToCart, productsController.update);
//para eliminar
router.delete('/delete/:id', productsController.destroy);

router.post('/productCart', productsController.addProduct);

module.exports = router;