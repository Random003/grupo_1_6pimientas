window.addEventListener('load', function() {


    let errors = {};

    //VALIDACIONES DE ERRORES DESDE EL FRONT

    // LOGIN 
    //-------------------------------------------------------------------------------------
     
    //ELEMENTOS DE LOGIN
    let formLoguin = document.getElementById('formLogin');
    if (formLoguin) {
        let emailLogin = document.getElementById('emailLogin');
        let passwordLogin = document.getElementById('passwordLogin');
    
        
        //VALIDACIONES LOGIN
    
        let validateEmailLogin = function() {
            let feedback = '';
            if (validator.isEmpty(emailLogin.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de email';
            } else if (!validator.isEmail(emailLogin.value)) {
                feedback = 'Debes ingresar un email válido';
            }
    
            handleFeedback(emailLogin, feedback);
        };
        
        let validatePasswordLogin = function() {
            let feedback = '';
            if (validator.isEmpty(passwordLogin.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo password';
                
            //  CHEQUEAR SI ES PROBLEMA DESPUES CON EL RESTO    
            // } else if (!((fld.value.search(/(a-z)+/)) && (fld.value.search(/(0-9)+/)))) {
            //     feedback = 'La contraseña debe tener al menos un número';
            // };

            };
    
            handleFeedback(passwordLogin, feedback);
        };
    
        //EVENTOS LOGIN
        //-------------------------------------------------------------------------------------
    
        emailLogin.addEventListener('blur', validateEmailLogin);
        passwordLogin.addEventListener('blur', validatePasswordLogin)
    
        //-------------------------------------------------------------------------------------
    
        //FORMULARIO LOGIN
        //-------------------------------------------------------------------------------------
    
        formLoguin.addEventListener('submit', function (event) {
    
            validateEmailLogin();
            validatePasswordLogin();
    
            if (Object.keys(errors).length) {
                event.preventDefault();
            }
        });

    };
    //-------------------------------------------------------------------------------------



    //VALIDACIONES REGISTER 
    //-------------------------------------------------------------------------------------
    let formRegister = document.getElementById('formRegister');
    if (formRegister) {
        //ELEMENTOS DE REGISTER
        let inputImgAddUser = document.getElementById('inputImgAddUser');
        let fullNameRegister = document.getElementById('full_nameRegister');
        let emailRegister = document.getElementById('emailRegister');
        let confirmEmailRegister = document.getElementById('confirmEmailRegister');
        let passwordRegister = document.getElementById('passwordRegister');
        let confirmPasswordRegister = document.getElementById('confirmPasswordRegister');
        let streetRegister = document.getElementById('streetRegister');
        let numberRegister = document.getElementById('numberRegister');


        //VALIDACIONES
    
        let validateInputImgAddUser = function() {
            let feedback = '';
            if(!validator.isEmpty(inputImgAddUser.value)) {
                let acceptedExtensions = [".jpg", ".jpeg", ".png"];
                let ext = inputImgAddUser.value.substr(-4);
                if(!acceptedExtensions.includes(ext)) {
                    feedback = 'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG';
                };
            }
            handleFeedback(inputImgAddUser, feedback);
        };
    
        let validatefullNameRegister = function() {
            let feedback = '';
            if (validator.isEmpty(fullNameRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el cambo de nombre';
            } else if (!validator.isLength(fullNameRegister.value, { min: 5 })) {
                feedback = 'El nombre debe tener como mínimo 5 caracteres';
            }
    
            handleFeedback(fullNameRegister, feedback);
        };
    
        let validateEmailRegister = function() {
            let feedback = '';
            if (validator.isEmpty(emailRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de email';
            } else if (!validator.isEmail(emailRegister.value)) {
                feedback = 'Debes ingresar un email válido';
            }
    
            handleFeedback(emailRegister, feedback);
        };
    
        let validateConfirmEmailRegister = function() {
            let feedback = '';
            if (validator.isEmpty(confirmEmailRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de email';
            } else if (!validator.isEmail(confirmEmailRegister.value)) {
                feedback = 'Debes ingresar un email válido';
            } else if (confirmEmailRegister.value != emailRegister.value) {
                feedback = 'El email y la confirmación de email deben ser iguales';
            }
    
            handleFeedback(confirmEmailRegister, feedback);
        };
    
        let validatePasswordRegister = function() {
            let feedback = '';
            if (validator.isEmpty(passwordRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo contraseña';
            } else if (!validator.isLength(passwordRegister.value, {min: 8} )) {
                feedback = 'La contraseña debe tener 8 caracteres como mínimo';

            };
    
            handleFeedback(passwordRegister, feedback);
        };

        let validateConfirmPasswordRegister = function() {
            let feedback = '';
            if (validator.isEmpty(confirmPasswordRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de confirmar contraseña';
            }else if (!validator.isLength(confirmPasswordRegister.value, {min: 8} )) {
                feedback = 'La contraseña debe tener 8 caracteres como mínimo';
            } else if (confirmPasswordRegister.value != passwordRegister.value) {
                feedback = 'La contraseña y la confirmación deben ser iguales';
            };
    
            handleFeedback(confirmPasswordRegister, feedback);
        };

        let validateStreetRegister = function() {
            let feedback = '';
            if (validator.isEmpty(streetRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo calle';
            };
    
            handleFeedback(streetRegister, feedback);
        };

        let validateNumberRegister = function() {
            let feedback = '';
            if (validator.isEmpty(numberRegister.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo número';
            };
    
            handleFeedback(numberRegister, feedback);
        };


        //EVENTOS REGISTER
        inputImgAddUser.addEventListener('blur', validateInputImgAddUser);
        fullNameRegister.addEventListener('blur', validatefullNameRegister);
        emailRegister.addEventListener('blur', validateEmailRegister);
        confirmEmailRegister.addEventListener('blur', validateConfirmEmailRegister);
        passwordRegister.addEventListener('blur', validatePasswordRegister);
        confirmPasswordRegister.addEventListener('blur', validateConfirmPasswordRegister);
        streetRegister.addEventListener('blur', validateStreetRegister);
        numberRegister.addEventListener('blur', validateNumberRegister);
    
        //-------------------------------------------------------------------------------------
    
        //FORMULARIO REGISTER
    
        formRegister.addEventListener('submit', function (event) {
            validateInputImgAddUser();
            validatefullNameRegister();
            validateEmailRegister();
            validateConfirmEmailRegister();
            validatePasswordRegister();
            validateConfirmPasswordRegister();
            validateStreetRegister();
            validateNumberRegister();
    
            if (Object.keys(errors).length) {
                event.preventDefault();
            }
        });
        //-------------------------------------------------------------------------------------

    };
    
    //VALIDACIONES EDIT USER 
    let formEditUser = document.getElementById('formEditUser');
    if (formEditUser) {
        //ELEMENTOS DE EDIT USER
        let inputUserImageEdit = document.getElementById('inputUserImageEdit');
        let fullNameEdit = document.getElementById('full_nameEdit');
        let emailEdit = document.getElementById('emailEdit');
        let confirmEmailEdit = document.getElementById('confirmEmailEdit');
        let passwordEdit = document.getElementById('passwordEdit');
        let confirmPasswordEdit = document.getElementById('confirmPasswordEdit');
        let streetEdit = document.getElementById('streetEdit');
        let numberEdit = document.getElementById('numberEdit');



        //VALIDACIONES
        let validateInputUserImageEdit = function() {
            let feedback = '';
            if(!validator.isEmpty(inputUserImageEdit.value)) {
                let acceptedExtensions = [".jpg", ".jpeg", ".png"];
                let ext = inputUserImageEdit.value.substr(-4);
                if(!acceptedExtensions.includes(ext)) {
                    feedback = 'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG';
                };
            }
            handleFeedback(inputUserImageEdit, feedback);
        };
    
        let validateFullNameEdit = function() {
            let feedback = '';
            if (validator.isEmpty(fullNameEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el cambo de nombre';
            } else if (!validator.isLength(fullNameEdit.value, { min: 5 })) {
                feedback = 'El nombre debe tener como mínimo 5 caracteres';
            }
    
            handleFeedback(fullNameEdit, feedback);
        };
    
        let validateEmailEdit = function() {
            let feedback = '';
            if (validator.isEmpty(emailEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de email';
            } else if (!validator.isEmail(emailEdit.value)) {
                feedback = 'Debes ingresar un email válido';
            }
    
            handleFeedback(emailEdit, feedback);
        };
    
        let validateConfirmEmailEdit = function() {
            let feedback = '';
            if (validator.isEmpty(confirmEmailEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de email';
            } else if (!validator.isEmail(confirmEmailEdit.value)) {
                feedback = 'Debes ingresar un email válido';
            } else if (confirmEmailEdit.value != emailEdit.value) {
                feedback = 'El email y la confirmación de email deben ser iguales';
            }
    
            handleFeedback(confirmEmailEdit, feedback);
        };
    
        let validatePasswordEdit = function() {
            let feedback = '';
            if (validator.isEmpty(passwordEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo contraseña';
            };
    
            handleFeedback(passwordEdit, feedback);
        };

        let validateConfirmPasswordEdit = function() {
            let feedback = '';
            if (validator.isEmpty(confirmPasswordEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo de confirmar contraseña';
            }else if (!validator.isLength(confirmPasswordEdit.value, {min: 8} )) {
                feedback = 'La contraseña debe tener 8 caracteres como mínimo';
            } else if (confirmPasswordEdit.value != passwordEdit.value) {
                feedback = 'La contraseña y la confirmación deben ser iguales';
            };
    
            handleFeedback(confirmPasswordEdit, feedback);
        };

        let validateStreetEdit = function() {
            let feedback = '';
            if (validator.isEmpty(streetEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo calle';
            };
    
            handleFeedback(streetEdit, feedback);
        };

        let validateNumberEdit = function() {
            let feedback = '';
            if (validator.isEmpty(numberEdit.value, { ignore_whitespace:true })) {
                feedback = 'Debes completar el campo número';
            };
    
            handleFeedback(numberEdit, feedback);
        };


        //EVETOS
        inputUserImageEdit.addEventListener('blur', validateInputUserImageEdit);
        fullNameEdit.addEventListener('blur', validateFullNameEdit);
        emailEdit.addEventListener('blur', validateEmailEdit);
        confirmEmailEdit.addEventListener('blur', validateConfirmEmailEdit);
        passwordEdit.addEventListener('blur', validatePasswordEdit);
        confirmPasswordEdit.addEventListener('blur', validateConfirmPasswordEdit);
        streetEdit.addEventListener('blur', validateStreetEdit);
        numberEdit.addEventListener('blur', validateNumberEdit);

        //FORMULARIO
        formEditUser.addEventListener('submit', function (event) {
            validateInputUserImageEdit();
            validateFullNameEdit();
            validateEmailEdit();
            validateConfirmEmailEdit();
            validatePasswordEdit();
            validateConfirmPasswordEdit();
            validateStreetEdit();
            validateNumberEdit();
    
            if (Object.keys(errors).length) {
                event.preventDefault();
            }
        });
        
        //-------------------------------------------------------------------------------------

    }


    //FUNCIÓN COMÚN A TODOS
    //-------------------------------------------------------------------------------------

    let handleFeedback = function (element, feedback) {
        let feedbackElement = element.nextElementSibling;

        if (feedback) {
            errors[element.name] = feedback;
        } else {
            delete errors[element.name];
        }
        feedbackElement.innerText = feedback;
    }

    //EVENTOS DE IMÁGENES DE USUARIOS--------------------------------------------------

    // captura de imágenes cuando el usuario quiere cambiarla
   

    // captura de imágenes cuando se registra un usuario nuevo
    let input_img_add_user = document.getElementById('inputImgAddUser')
    if (input_img_add_user) {
        input_img_add_user.addEventListener('change', function () {
            let imgAddUser = document.getElementById("imgAddUser");
            let fileAddUser = this.files[0];
            imgAddUser.classList.add("obj");
            imgAddUser.file = fileAddUser;
            let readerAddUser = new FileReader();
            readerAddUser.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgAddUser);
            readerAddUser.readAsDataURL(fileAddUser);
        })
    };

    let input_img_edit_user = document.getElementById('inputUserImageEdit')
    if (input_img_edit_user) {
        input_img_edit_user.addEventListener('change', function () {
            let imgEditUser = document.getElementById("userImageEdit");
            let fileEditUser = this.files[0];
            imgEditUser.classList.add("obj");
            imgEditUser.file = fileEditUser;
            let readerEditUser = new FileReader();
            readerEditUser.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgEditUser);
            readerEditUser.readAsDataURL(fileEditUser);
        })
    };
   


});