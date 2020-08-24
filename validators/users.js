const {check} = require ('express-validator'); //chequeo campos del form de loguin

module.exports = {
    create: [],
    login: [
        check('email')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Debes completar el campo password")
            .bail()

    ]

}