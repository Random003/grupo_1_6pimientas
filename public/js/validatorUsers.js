// window.addEventListener('load', function() {

//     // Validaciones para usuarios
//     // check('email')
//     // .notEmpty().withMessage("Debes completar el cambo de email").bail()
//     // .isEmail().withMessage("Debes ingresar un email válido"),

//     // check('password')
//     // .notEmpty().withMessage("Debes completar el campo password")
//     // .bail()

//     let errors = {};

//     let formLoguin = document.getElementById('formLogin');
//     let emailLoguin = document.getElementById('emailLogin');

//     emailLoguin.addEventListener('blur', function() {
//         let feedbackEmailLogin = document.getElementById('feedbackEmailLogin'); 
//         let feedback = '';
//         if (!validator.isEmpty(emailLoguin.value, { ignore_whitespace:true })) {
//             feedback = 'Debes completar el cambo de email';
//             errors.emailLoguin = feedback;
//         } else if (validator.isEmail(emailLoguin.value)){
//             feedback = 'Debes ingresar un email válido';
//             errors.emailLoguin = feedback;
//         }
//         feedbackEmailLogin.innerText = feedback;
//     });



//     formLoguin.addEventListener('submit', function(event) {
//         event.preventDefault();

//     });



// })