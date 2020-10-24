window.addEventListener('load', function () {
    let errors = {};

    let createSale = document.getElementById('createSale');
    if (createSale) {
        
        let name = document.getElementById('name');
        let discount = document.getElementById('discount');
        let price = document.getElementById('price');
        let images = document.getElementById('imagesSales');  // si funciona


        let validateName = function () {
            let feedback = '';
            if (validator.isEmpty(name.value, { ignore_whitespace: true })) {
                feedback = 'El campo no puede estar vacío';
            } else if (!validator.isLength(name.value, { min: 5 })) {
                feedback = 'El nombre debe tener al menos 5 caracteres';
            }

            handleFeedback(name, feedback)
        }


        let validateDiscount = function () {
            let feedback = '';

            if (validator.isEmpty(discount.value, { ignore_whitespace: true })) {
                feedback = 'Debe completar el descuento del producto';
            } else if (!validator.isInt(discount.value, { min: 0, max: 100 })) {
                feedback = 'El descuento debe ser entre 0 y 100';
            }

            handleFeedback(discount, feedback)
        }

        let validatePrice = function () {
            let feedback = '';

            if (validator.isEmpty(price.value, { ignore_whitespace: true })) {
                feedback = 'El campo no puede estar vacío';
            } else if (!validator.isFloat(price.value, { min: 20 })) {
                feedback = 'El precio debe ser númerico';
            }

            handleFeedback(price, feedback)
        }


        let validateImages = function () {
            let feedback = '';

            if (validator.isEmpty(images.value)) {
                let acceptedExtensions = [".jpg", ".jpeg", ".png"];
                let ext = images.value.substr(-4);

                if (!acceptedExtensions.includes(ext)) {
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
            
            if (Object.keys(errors).length) {
                º
                event.preventDefault();   // prevenir el envío de formulario
                
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


        //Validación de cambio o carga de imágenes
        // Carga de imágnes en el create
        if (createSale) {
            let input_sale_create = document.getElementById('inputImageSales');
            if (input_sale_create) {
                input_sale_create.addEventListener('change', function () {
                    let img_sale_create = document.getElementById("imagesSales");
                    let file_sale = this.files[0];
                    img_sale_create.classList.add("obj");
                    img_sale_create.file = file_sale;
                    let reader_sale_add = new FileReader();
                    reader_sale_add.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(img_sale_create);
                    reader_sale_add.readAsDataURL(file_sale);

                });
            };
        };
       




    };

    // captura de imágen cuando se cambia imágen desde Edit
    let formEditSale = document.getElementById('formEditSale');
    if (formEditSale) {
        let input_sale_image_edit = document.getElementById('inputSaleImageEdit');
        if(input_sale_image_edit) {
            input_sale_image_edit.addEventListener('change', function () {
            let imgSaleEdit = document.getElementById("imgSaleEdit");
            let fileSaleEdit = this.files[0];
            imgSaleEdit.classList.add("obj");
            imgSaleEdit.file = fileSaleEdit;
            let readerSaleEdit = new FileReader();
            readerSaleEdit.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgSaleEdit);
            readerSaleEdit.readAsDataURL(fileSaleEdit);
            console.log('Anda');
            });
    }
    };  






     // Carga de imágnes en el edit
    //  let formEditSale = document.getElementById('formEditSale');
    //  if (formEditSale) {
    //      let input_sale_edit = document.getElementById('inputSaleImageEdit');
    //      if (input_sale_edit) {
    //          input_sale_edit.addEventListener('change', function () {
    //              let img_sale_edit = document.getElementById("imgSaleEdit");
    //              let file_sale_edit = this.files[0];
    //              img_sale_edit.classList.add("obj");
    //              img_sale_edit.file = file_sale_edit;
    //              let reader_sale_edit = new FileReader();
    //              reader_sale_edit.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(input_sale_edit);
    //              reader_sale_edit.readAsDataURL(file_sale_edit);
    //              console.log('Entra');

    //          });
    //      };
    //  };
})
