function crear_bolsa() {

};

window.addEventListener ('load', function () {
    //captura cuando el usuario hace click en el botón agregar producto a la compra
    let botones_compra = document.querySelectorAll('.botonAgregarPedido2');
    if (botones_compra) {
        botones_compra.forEach(boton_compra => {
            boton_compra.addEventListener('click', function() {
                
                let id_user = document.getElementById('id_user');
                if (id_user && id_user.value != '') {
                    
                    // let shop_bag = JSON.parse(localStorage.getItem('shopBag' + id_user.value));
                    // if (shop_bag) {
                        
                    //     let product_temp = shop_bag.id_products;
                    //     product_temp.push (boton_compra.id);
                    //     shop_bag.id_products = product_temp;
                    //     localStorage.setItem('shopBag' + id_user.value, JSON.stringify(shop_bag));
                    //     console.log(localStorage.getItem('shopBag' + id_user.value));
                    //     console.log(JSON.parse(localStorage.getItem('shopBag' + id_user.value)));
                    // } else {
                    //     shop_bag = {
                    //         id_user: id_user.value,
                    //         id_products: [boton_compra.id]
                    //     };
                    //     localStorage.setItem('shopBag' + id_user.value, JSON.stringify(shop_bag));
                    // }
                        

                } else {
                    
                    window.location.href = ('/users/login');
                }
            });
            
        });
    }

    // captura de imágenes cuando el usuario quiere cambiarla
    let input_user_image_edit = document.getElementById('inputUserImageEdit');
    if (input_user_image_edit) {
        input_user_image_edit.addEventListener('change', function () {
        let imgUser = document.getElementById("userImageEdit");
        let fileUser = this.files[0];
        console.log(fileUser);
        imgUser.classList.add("obj");
        imgUser.file = fileUser;
        let readerUser = new FileReader();
        readerUser.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgUser);
        readerUser.readAsDataURL(fileUser);
        
        }); 
    };

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
    let input_product_image_add = document.getElementById('inputProductAddImage')
    if (input_product_image_add) {
        input_product_image_add.addEventListener('change', function () {
            let imgProdAdd = document.getElementById("productImageAdd");
            let fileProdAdd = this.files[0];
            imgProdAdd.classList.add("obj");
            imgProdAdd.file = fileProdAdd;
            let readerProdAdd = new FileReader();
            readerProdAdd.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imgProdAdd);
            readerProdAdd.readAsDataURL(fileProdAdd);
        })
    };
    

   

});
window.addEventListener