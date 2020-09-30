const {check, body} = require ('express-validator');


module.exports = {
    create: [
        check("discount")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .bail()
    .isNumeric()
    .withMessage("Solo se aceptan números")
    .bail()
    .custom((value) => parseInt(value, 10) >= 0)
    .withMessage("No se aceptan números negativos")
    .bail()
    .custom((value) => parseInt(value, 10) < 99)
    .withMessage("El descuento no puede ser mayor e igual al 100%"),
  body("category").notEmpty().withMessage("Campo obligatorio"),
  body("description")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .bail()
    .isLength({ min: 30 })
    .withMessage("La descripción debe tener al menos 30 carácteres")
    .bail()
    .isLength({ max: 100 })
    .withMessage("La descripción debe tener menos de 100 carácteres"),],

    editSale: [ 
        check('name')
    .notEmpty().withMessage('Debes completar el campo de nombre').bail()
    .isLength({min:8}).withMessage('El nombre debe tener al menos 8 caracteres'),

    check('discount')
    .isLength({min:10}).withMessage('La promoción debe tener al menos 10 caracteres').bail(),

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
  ),],

    
}