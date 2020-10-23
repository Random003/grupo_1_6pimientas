
window.addEventListener ('load', function () {
    
    
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


    //EVENTOS IMÁGENES DE PRODUCTOS-----------------------------------------------------------

    // captura de imágenes cuando el Administrador quiere cambiar una imágen de un producto
    let input_product_image_edit = document.getElementById('inputProductImageEdit');
    if(input_product_image_edit) {
        input_product_image_edit.addEventListener('change', function () {
        let imgProd = document.getElementById("productImageEdit");
        let fileProd = this.files[0];
        imgProd.classList.add("obj");
        imgProd.file = fileProd;
        let readerProd = new FileReader();
        readerProd.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgProd);
        readerProd.readAsDataURL(fileProd);
        });
    };  

    // captura de imágenes cuando el Administrador crea un producto
    let input_product_image_add = document.getElementById('inputProductAddImage');
    if (input_product_image_add) {
        input_product_image_add.addEventListener('change', function () {
        let imgProdAdd = document.getElementById("productImageAdd");
        let fileProdAdd = this.files[0];
        imgProdAdd.classList.add("obj");
        imgProdAdd.file = fileProdAdd;
        let readerProdAdd = new FileReader();
        readerProdAdd.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgProdAdd);
        readerProdAdd.readAsDataURL(fileProdAdd);
        });
    };
    
    
    //EVENTOS BOLSA DE COMPRA--------------------------------------------------

    //captura cuando el usuario hace click en el botón agregar producto a la compra
    let botones_compra = document.querySelectorAll('.botonAgregarPedido2');
    if (botones_compra) {
        botones_compra.forEach(boton_compra => {
            boton_compra.addEventListener('click', function() {
                let id_user = document.getElementById('id_user');
                if (id_user && id_user.value != '') {
                } else {
                    window.location.href = ('/users/login');
                }
            });
        });
    };

    //capturo el evento click de los botones más y menos de la bolsa de compras
    const pUnit = document.querySelectorAll('.p_unit');
    const subTotal =  document.querySelectorAll('.sub_total');
    const inputQuantities = document.querySelectorAll('.cantidad_producto_bolsa');
    const total = document.getElementById('Total');
    if (inputQuantities) {
        inputQuantities.forEach(inputQuantity => {
            inputQuantity.addEventListener('change', function() {
                let indexQuantity = inputQuantity.id.substr(11); 
                if (this.value > 0 ) {
                    total.value = 0
                    subTotal[indexQuantity].value = "$" + Number(this.value) * Number(pUnit[indexQuantity].value.substr(1));
                    total.value += subTotal[indexQuantity].value.substr(1)
                } else {
                    this.value = 1;
                }
            })
        });
    };

    const buttonsLess = document.querySelectorAll('.restar_producto_bolsa');
    if (buttonsLess) {
        buttonsLess.forEach(buttonLess => {
            buttonLess.addEventListener('click', function () {
                let indexLess = buttonLess.id.substr(10);
                if (inputQuantities[indexLess].value > 1) {
                    inputQuantities[indexLess].value = inputQuantities[indexLess].value - 1; 
                    subTotal[indexLess].value = "$" + Number(inputQuantities[indexLess].value) * Number(pUnit[indexLess].value.substr(1));
                }
            });
    });
    };

    const buttonsAdd = document.querySelectorAll('.sumar_producto_bolsa');
    if (buttonsAdd) {
        buttonsAdd.forEach(buttonAdd => {
            buttonAdd.addEventListener('click', function () {
                let indexAdd = buttonAdd.id.substr(9);
                inputQuantities[indexAdd].value = Number(inputQuantities[indexAdd].value) + 1; 
                subTotal[indexAdd].value = "$" + Number(inputQuantities[indexAdd].value) * Number(pUnit[indexAdd].value.substr(1));
                actualizar_total(buttonAdd.id.substr(9));
            });
    
        });    
    };

    function actualizar_total (indexSub) {
        // inputQuantities.forEach(buttonAdd => { 
        //     let indexQuantity = inputQuantity.id.substr(11); 
        //         console.log(indexSub);
        //     });
        
    }

    
    
   
});
