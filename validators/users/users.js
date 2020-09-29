const {check, body} = require ('express-validator'); //chequeo campos del form de loguin



module.exports = {
    
    create: [],
    login: [
        check('email')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Debes completar el campo password")
            .bail()

    ],
    register: [
        
        check('full_name')
            .notEmpty().withMessage("Debes completar el cambo de nombre").bail()
            .isLength( {min: 5} ).withMessage("El nombre debe tener como mínimo 5 caracteres"),
        
        check('email')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('confirmEmail')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Debes completar el campo password").bail()
            .isLength( {min: 6} ).withMessage("La contraseña debe tener 6 caracteres como mínimo"),

        check('confirmPassword')
            .notEmpty().withMessage("Debes completar el campo password")
            .bail()
            .isLength( {min: 6} ).withMessage("La contraseña debe tener 6 caracteres como mínimo"),
        
        check('street')
            .notEmpty().withMessage("Debes completar el campo calle")
            .bail(),

        check('number')
            .notEmpty().withMessage("Debes completar el campo número")
            .bail()
            .isInt().withMessage("Debes ingresar un número válido"),
        
        
        ],
        editUser: [
            check('full_name')
            .notEmpty().withMessage("Debes completar el cambo de nombre").bail()
            .isLength( {min: 5} ).withMessage("El nombre debe tener como mínimo 5 caracteres"),
        
        check('email')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('confirmEmail')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido"),
        
        check('password')
            .notEmpty().withMessage("Debes completar el campo password").bail()
            .isLength( {min: 8} ).withMessage("La contraseña debe tener 8 caracteres como mínimo"),

        check('confirmPassword')
            .notEmpty().withMessage("Debes completar el campo password")
            .bail()
            .isLength( {min: 8} ).withMessage("La contraseña debe tener 8 caracteres como mínimo"),
        
        check('street')
            .notEmpty().withMessage("Debes completar el campo calle")
            .bail(),

        check('number')
            .notEmpty().withMessage("Debes completar el campo número")
            .bail()
            .isInt().withMessage("Debes ingresar un número válido"),    
        ],

        checkEmail: (req, res, next) => {
            if (req.body.email != req.body.confirmEmail) {
                return res.render('register', { 
                    errors: { email: { msg: 'El email y la confirmacíon deben ser iguales' }, confirEmail: { msg: 'El email y la confirmacíon deben ser iguales' } } ,
                    register: req.body 
                });
            }
            next();
        },
        checkPass: (req, res, next) => {
            if (req.body.password != req.body.confirmPassword) {
                return res.render('register', { 
                    errors: { password: { msg: 'Las contraseñas deben ser iguales' }, confirmPassword: { msg: 'Las contraseñas deben ser iguales' } } ,
                    register: req.body 
                });
            }
            next();
        },
        checkEmailEdit: (req, res, next) => {
            if (req.body.email != req.body.confirmEmail) {
                return res.render('editUsers', { 
                    errors: { email: { msg: 'El email y la confirmacíon deben ser iguales' }, confirEmail: { msg: 'El email y la confirmacíon deben ser iguales' } } ,
                    user: req.body 
                });
            }
            next();
        },
        checkPassEdit: (req, res, next) => {
            if (req.body.password != req.body.confirmPassword) {
                return res.render('editUsers', { 
                    errors: { password: { msg: 'Las contraseñas deben ser iguales' }, confirmPassword: { msg: 'Las contraseñas deben ser iguales' } } ,
                    user: req.body 
                    
                });
            }
            next();
        },   
}
