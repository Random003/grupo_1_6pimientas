
window.addEventListener ('load', function () {
    
    //EVENTOS BOLSA DE COMPRA--------------------------------------------------

    //captura cuando el usuario hace click en el botón agregar producto a la compra
    let botones_compra = document.querySelectorAll('.botonAgregarPedido2');
    if (botones_compra) {
        botones_compra.forEach(boton_compra => {
            boton_compra.addEventListener('click', function() {
                let id_user = document.getElementById('id_user');
                if (id_user && id_user.value == '') {
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
                    
                    subTotal[indexQuantity].value = "$" + Number(this.value) * Number(pUnit[indexQuantity].value.substr(1));
                    
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
                    actualizar_total(buttonsLess.length);
                    
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
                actualizar_total(buttonsAdd.length);
                //actualizo un input hidden de la vista 
            });
    
        });    
    };

    function actualizar_total (indexSub) {
        //total.value = Number(total.value.substr(1)) + Number(subTotal[indexLess].value.substr(1))
        let totalTemp = 0;
        for (let i = 0; i < indexSub; i++) {
            totalTemp += Number(subTotal[i].value.substr(1));
            total.value = `$${totalTemp}`;
        };

            
        
    }
    if (subTotal) {
        actualizar_total(buttonsAdd.length);
    }

    const inputId = document.querySelectorAll('.inputId')
    const frmEndPurchase = document.getElementById('frm_end_purchase');
    if (frmEndPurchase) {
        frmEndPurchase.addEventListener('submit', function (event) {
            //event.preventDefault();
            
            let idQuantity = [];
            for (let x = 0; x < inputId.length; x++ ) {
                idQuantity.push({id: Number(inputId[x].value), quantity: Number(inputQuantities[x].value)});
            };
            event.idQuantity = idQuantity
            console.log(event.idQuantity);
        })
    } 
   
});
