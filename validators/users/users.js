const {check, body} = require ('express-validator'); //chequeo campos del form de login
const path = require('path');
const { user } = require('../../database/models');


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
            .isEmail().withMessage("Debes ingresar un email válido")
            .custom((value) => {
                return user.findOne({
                  where: {
                    email: value,
                  },
                }).then((user) => {
                  if (user) {
                    return Promise.reject("Email ya registrado");
                  }
                });
              }),
        
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

        check("image")
            .custom((value, { req }) => {
              if (req.file != undefined) {
                const acceptedExtensions = [".jpg", ".jpeg", ".png"];
                const ext = path.extname(req.file.originalname);
                return acceptedExtensions.includes(ext);
              }
      
              return true;
            })
            .withMessage(
              "La imagen debe ser en uno de los siguientes formatos: JPG, JPEG, PNG"
            ),    
        
        ],
        editUser: [
            check('full_name')
            .notEmpty().withMessage("Debes completar el cambo de nombre").bail()
            .isLength( {min: 5} ).withMessage("El nombre debe tener como mínimo 5 caracteres"),
        
        check('email')
            .notEmpty().withMessage("Debes completar el cambo de email").bail()
            .isEmail().withMessage("Debes ingresar un email válido")
            .custom((value) => {
                return User.findOne({
                  where: {
                    email: value,
                  },
                }).then((user) => {
                  if (user) {
                    return Promise.reject("Email ya registrado");
                  }
                });
              }),
        
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
            
        check("image")
            .custom((value, { req }) => {
              if (req.file != undefined) {
                const acceptedExtensions = [".jpg", ".jpeg", ".png"];
                const ext = path.extname(req.file.originalname);
                return acceptedExtensions.includes(ext);
              }
      
              return true;
            })
            .withMessage(
              "La imagen debe ser en uno de los siguientes formatos: JPG, JPEG, PNG"
            ),     
        ],

        checkEmail: (req, res, next) => {
           
            
            if (req.body.email != req.body.confirmEmail) {
                return res.render('./users/register', { 
                    errors: { 
                        email: { msg: 'El email y la confirmacíon deben ser iguales' }, 
                        confirmEmail: { msg: 'El email y la confirmacíon deben ser iguales' } 
                    },
                    register:  req.body  
                
                });
                            
            } else {
                next();
            }
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
                    errors: { email: { msg: 'El email y la confirmacíon deben ser iguales' }, confirmEmail: { msg: 'El email y la confirmacíon deben ser iguales' } } ,
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
