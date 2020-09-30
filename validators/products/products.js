const {check, body} = require ('express-validator');


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
    ]
}