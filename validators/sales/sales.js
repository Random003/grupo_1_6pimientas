const { check } = require('express-validator');



module.exports = {
  create: [
    check('name')
      .notEmpty().withMessage('Debes completar el campo de nombre').bail()
      .isLength({ min: 8 }).withMessage('El nombre debe tener al menos 8 caracteres'),

    check("discount")
      .notEmpty()
      .withMessage("Debes completar el campo descuento").bail(),
      


    // check("description")
    //   .notEmpty()
    //   .withMessage("Campo obligatorio").bail()
    //   .isLength({ min: 30 })
    //   .withMessage("La descripción debe tener al menos 30 carácteres").bail()
    //   .isLength({ max: 100 })
    //   .withMessage("La descripción debe tener menos de 100 carácteres"),

    check('price')
      .notEmpty().withMessage('Debes completar el precio').bail()
      .isNumeric().withMessage('El precio debe ser un numero')
      .custom((value, { req }) => req.body.price > 0).withMessage("No se aceptan números negativos"),
  ],

  editSale: [
    check('name')
      .notEmpty().withMessage('Debes completar el campo de nombre').bail()
      .isLength({ min: 8 }).withMessage('El nombre debe tener al menos 8 caracteres'),

    check("discount")
      .notEmpty()
      .withMessage("Debes completar el campo descuento").bail(),

    check('price')
      .notEmpty().withMessage('Debes completar el precio').bail()
      .isNumeric().withMessage('El precio debe ser un numero')
      .custom((value, { req }) => req.body.price > 0).withMessage("No se aceptan números negativos"),

  ]


}