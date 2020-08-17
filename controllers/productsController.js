const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const productsModel = jsonTable('products');

module.exports = {
    product1 : (req, res) => {
        res.render('productDetail1');
    },
    product2:  (req, res) => {
        res.render('productDetail2');
    },
    productCart:  (req, res) => {
        res.render('productCart');
    },
    promociones:  (req, res) => {

        let idPromociones = req.params.idPromociones; 

        let promociones = []

<<<<<<< HEAD
        //let promocionesToEdit = promociones.[idPromociones];
=======
        // let promocionesToEdit = promociones.[idPromociones];
>>>>>>> 369c0ff9de98dfb422cba265ef1b1dfbff53eb17

        
        res.render('promocionesToEdit', {promocionesToEdit: promocionesToEdit});
        
        res.render('idPromociones'); 
        
        res.render("promociones");
    },
    add:  (req, res) => {
        //let prueba = productsModel.readFile();
       
        res.render("add");
    },
    edit:  (req, res) => {

        let productId = req.params.productId; 

        let products =  {
            "name": req.body.name,
            "description": req.body.description,
            "variety":req.body.variety,
            "presentation": req.body.presentation,
            "performance": req.body.performance,
            "price": req.body.price,
            "image": null
        }

       // let productsToEdit = products.[productId];

       res.render("productsToEdit", {productsToEdit: productsToEdit});

        res.render(idProduct);
    },
    store: (req, res, next) => {
    
        res.send(req.body);
    }
}
