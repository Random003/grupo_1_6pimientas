window.addEventListener('load', function(){

    let errors = {};

    let formProduct = document.getElementById('formProduct');
    if (formProduct) {

        //  let createProduct = document.getElementById('createProduct');
         let nameProduct = document.getElementById('nameProduct');
         let descriptionProduct = document.getElementById('descriptionProduct');
         let presentationProduct = document.getElementById('presentationProduct');
         let performanceProduct = document.getElementById('performanceProduct');
         let priceProduct = document.getElementById('price');
         let inputProductAddImage = document.getElementById('inputProductAddImage');

 

                //Validaciones en Products

        let validateName = function (){
        let feedback = '';

        if(validator.isEmpty(nameProduct.value, {ignore_whitespace:true })) {
            feedback = 'Debes completar el campo de nombre';
        }else if(!validator.isLength(nameProduct.value, { min: 8 }))  {
            feedback = 'El nombre debe tener al menos 8 caracteres';
        }

        handleFeedback(nameProduct, feedback)
    };
    let validateDescription = function (){
        let feedback = '';

        if(validator.isEmpty(descriptionProduct.value, {ignore_whitespace:true })) {
            feedback = 'La descipción no puede estar vacío';
        }else if(!validator.isLength(descriptionProduct.value, { min: 10 }))  {
            feedback = 'La descripción debe tener al menos 10 caracteres';
        }

        handleFeedback(descriptionProduct, feedback)
    };
    let validatePrice = function (){
        let feedback = '';

        if(validator.isEmpty(priceProduct.value, {ignore_whitespace:true })) {
            feedback = 'Debes completar el precio con números';
        }else if(!validator.isFloat(priceProduct.value))  {
            feedback = 'El precio debe ser un numero';
        }else if (price.value < 0 ) {
            feedback = 'El precio debe ser mayor a 0';
            
        }

        handleFeedback(priceProduct, feedback)
    };
    let validatePresentation = function (){
        let feedback = '';
 
        if(validator.isEmpty(presentationProduct.value, {ignore_whitespace:true })) {
            feedback = 'El campo de presentación no puede estar vacío';
        };

        handleFeedback(presentationProduct, feedback);
    };

    let validatePerformance = function (){
        let feedback = '';
 
        if(validator.isEmpty(performanceProduct.value, {ignore_whitespace:true })) {
            feedback = 'El campo de rendimiento no puede estar vacío';
        };

        handleFeedback(performanceProduct, feedback);
    };

    let validateInputProductAddImage = function() {
        let feedback = '';
        if(!validator.isEmpty(inputProductAddImage.value)) {
            let acceptedExtensions = [".jpg", ".jpeg", ".png"];
            let ext = inputProductAddImage.value.substr(-4);
            if(!acceptedExtensions.includes(ext)) {
                feedback = 'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG';
            };
        }
        handleFeedback(inputProductAddImage, feedback);
    }; 
  


       //Eventos  
       nameProduct.addEventListener('blur', validateName);
       descriptionProduct.addEventListener('blur', validateDescription);
       priceProduct.addEventListener('blur', validatePrice);
       presentationProduct.addEventListener('blur', validatePresentation);
       performanceProduct.addEventListener('blur', validatePerformance);
       inputProductAddImage.addEventListener('change', validateInputProductAddImage)



    // let validateCreateProduct = function (event){
    formProduct.addEventListener('submit', function (event) {

        validateName();
        validateDescription();
        validatePrice();
        validatePresentation();
        validatePerformance();
        validateInputProductAddImage();
        
         if (Object.keys(errors).length) {                 
                event.preventDefault();   // prevenir el envío de formulario
                
        }
    });
}
    

//Funcion comun
 
    let handleFeedback = function (element, feedback) {
        let feedbackElement = element.nextElementSibling;

        if (feedback) {
            errors[element.name] = feedback;
        } else {
            delete errors[element.name];
        }
        feedbackElement.innerText = feedback;
    }

    
    
});


    