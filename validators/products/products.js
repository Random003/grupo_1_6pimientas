const {check, body} = require ('express-validator');
const path = require('path');


module.exports = {
    create: [
        check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre').bail()
        .isLength({min:8}).withMessage('El nombre debe tener al menos 8 caracteres'),
    
        check('description')
        .isLength({min:10}).withMessage('La descripción debe tener al menos 10 caracteres').bail(),
    
        check('price')
        .notEmpty().withMessage('Debes completar el precio').bail()
        .isNumeric().withMessage('El precio debe ser un numero')
        .custom((value, { req }) => req.body.price > 0).withMessage("No se aceptan números negativos"),
       
       check("image")
       .custom((value, { req }) => req.file)
       .withMessage("Debes ingresar una imagen para tu producto")
       .bail()
       .custom((value, { req }) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
       })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
    ],
    
    editProduct: [
        check('name')
        .notEmpty().withMessage('Debes completar el campo de nombre').bail()
        .isLength({min:8}).withMessage('El nombre debe tener al menos 8 caracteres'),
    
        check('description')
        .isLength({min:10}).withMessage('La descripción debe tener al menos 10 caracteres').bail(),
    
         check('price')
        .notEmpty().withMessage('Debes completar el precio').bail()
        .isNumeric().withMessage('El precio debe ser un numero')
        .custom((value, { req }) => req.body.price > 0).withMessage("No se aceptan números negativos"),
       
       check("image")
       .custom((value, { req }) => req.file)
       .withMessage("Debes ingresar una imagen para tu producto")
       .bail()
       .custom((value, { req }) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
       })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
    ],

    addToCart: [
        body("quantity")
          .custom((value) => value > 0)
          .withMessage("Debe agregar al menos 1 producto a la bolsa de compras"),
      ],
}