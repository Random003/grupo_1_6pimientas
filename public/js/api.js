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
});