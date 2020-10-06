window.addEventListener('load', function(){
    let errors = {};
    let createProduct = document.getElementById('createProduct');
    let name = document.getElementById('name');
    let description = document.getElementById('description');
    let performance = document.getElementById('performance')
    let price = document.getElementById('price');
    let images = document.getElementById('inputProductAddImage');

    let validateName = function (){
        let feedback = '';

        if(validator.isEmpty(name.value, {ignore_whitespace:true })) {
            feedback = 'Debes completar el campo de nombre';
        }else if(!validator.isLength(name.value, { min: 8 }))  {
            feedback = 'El nombre debe tener al menos 8 caracteres';
        }

        handleFeedback(name, feedback)
    }
    let validateDescription = function (){
        let feedback = '';

        if(validator.isEmpty(description.value, {ignore_whitespace:true })) {
            feedback = 'La descipción no puede estar vacío';
        }else if(!validator.isLength(description.value, { min: 10 }))  {
            feedback = 'La descripción debe tener al menos 10 caracteres';
        }

        handleFeedback(description, feedback)
    }
    let validatePrice = function (){
        let feedback = '';

        if(validator.isEmpty(price.value, {ignore_whitespace:true })) {
            feedback = 'Debes completar el precio';
        }else if(!validator.isFloat(price.value))  {
            feedback = 'El precio debe ser un numero';
        }else if (price.value < 0 ) {
            feedback = 'El precio debe ser mayor a 0';
            
        }

        handleFeedback(price, feedback)
    }
    let validatePerformance = function (){
        let feedback = '';
 
        if(validator.isEmpty(performance.value, {ignore_whitespace:true })) {
            feedback = 'El campo no puede estar vacío';
        };

        handleFeedback(performance, feedback);
    }


    let validateImages = function() {
        let feedback = '';

        if(validator.isFile(images.value)) {
            let acceptedExtensions = [".jpg", ".jpeg", ".png"];
            let ext = images.value.substr(-4);
          
            if(!acceptedExtensions.includes(ext)) {
                feedback = 'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG';
            };
        }
        console.log(ext);
        handleFeedback(images, feedback);
    }


     //Modularizar la funcion para mostrar feedback 
     let handleFeedback = function (element, feedback){
        let feedbackElement = element.nextElementSibling;

        if(feedback != ''){
            element.classList.add('error');
            feedbackElement.classList.add('error');
            errors[element.name] = feedback; //[element. nombre del imput]

        }else{
            element.classList.remove('error');
            feedbackElement.classList.remove('error');
            delete errors.password;
        }

        feedbackElement.innerText = feedback;
        console.log(errors);
    };


    let validateCreateProduct = function(e){
        validateName();
        validateDescription();
        validatePrice();
        validatePerformance();
        validateImages();

        if(object.keys(errors).length) { //objeto con arrays de propiedades
            e.preventDefault();                // prevenir el envío de formulario
        }
    };

    //Agregado de listeners 

    name.addEventListener('blur', validateName);
    description.addEventListener('blur', validateDescription);
    price.addEventListener('blur', validatePrice);
    performance.addEventListener('blur', validatePerformance)
    images.addEventListener('change', validateImages)

    createProduct.addEventListener('submit', validateCreateProduct);
}) 
    