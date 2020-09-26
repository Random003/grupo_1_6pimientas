function crear_bolsa() {

};

function agregar_producto (id) {
    
}
window.addEventListener ('load', function () {
    let botones_compra = document.querySelectorAll('.botonAgregarPedido2');

    botones_compra.forEach(boton_compra => {
        boton_compra.addEventListener('click', function() {
            console.log(boton_compra.id);
        });
        
    });

    
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

});