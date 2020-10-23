window.addEventListener('load', function(){
    let errors = {};
 
    let createSale = document.getElementById('createSale');
    if (createSale) {
        console.log('Entra en el formulario');
        let name = document.getElementById('name');
        let discount = document.getElementById('discount');
        let price = document.getElementById('price');
        let images = document.getElementById('imagesSales');  // si funciona
        
          
        let validateName = function (){
            let feedback = '';
            if(validator.isEmpty(name.value, {ignore_whitespace:true })) {
                feedback = 'El campo no puede estar vacío';
            } else if (!validator.isLength(name.value, { min: 5 }))  {
                feedback = 'El nombre debe tener al menos 5 caracteres';
            }
            
            handleFeedback(name, feedback)
        }


        let validateDiscount = function (){
            let feedback = '';
    
            if(validator.isEmpty(discount.value, {ignore_whitespace:true })) {
                feedback = 'Debe completar el descuento del producto';
            }else if(!validator.isInt(discount.value, { min: 0, max: 100 }))  {
                feedback = 'El descuento debe ser entre 0 y 100';
            }
    
            handleFeedback(discount, feedback)
        }
        
        let validatePrice = function (){
            let feedback = '';
    
            if(validator.isEmpty(price.value, {ignore_whitespace:true })) {
                feedback = 'El campo no puede estar vacío';
            }else if(!validator.isFloat(price.value, { min: 20 }))  {
                feedback = 'El precio debe ser númerico';
            }
    
            handleFeedback(price, feedback)
        }
       
        //no funcaaaaaaaaa!
    
       

        let validateImages = function() {
            let feedback = '';
    
            if(validator.isEmpty(images.value)) {
                let acceptedExtensions = [".jpg", ".jpeg", ".png"];
                let ext = images.value.substr(-4);
              
                if(!acceptedExtensions.includes(ext)) {
                    feedback = 'La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG';
                };
            }
            
            handleFeedback(images, feedback);
        }
    
       
    
        name.addEventListener('blur', validateName);
        discount.addEventListener('blur', validateDiscount);
        price.addEventListener('blur', validatePrice);
        images.addEventListener('change', validateImages)
        
        createSale.addEventListener('submit', function (event) {
            
            validateName();
            validateDiscount();
            validatePrice();
            validateImages();
            console.log(errors);
            if (Object.keys(errors).length) {               º  
                event.preventDefault();   // prevenir el envío de formulario
                console.log('Entróoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
        }

        });
        


         //Modularizar la funcion para mostrar feedback 
         let handleFeedback = function (element, feedback) {
            let feedbackElement = element.nextElementSibling;
    
            if (feedback) {
                errors[element.name] = feedback;
            } else {
                delete errors[element.name];
            }
            feedbackElement.innerText = feedback;
        }
    
    
    
       
    
    

    };
}) 
    