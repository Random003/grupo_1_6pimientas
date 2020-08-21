const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');

module.exports = {
    products : (req, res) => {
        let products = productsModel.all();
        res.render('products', { products } );
    },
//agregado de ruta, no funciona, la dejo xq mañana sigo con esta historia
    //admin: (req, res, next) => {
    
     //   res.render('productsAdmin')
   // },

    productCart:  (req, res) => {
        res.render('productCart');
    },
    // sales:  (req, res) => {
    //     let idPromociones = req.params.idPromociones; 

    //     let promociones = []

    //     //let promocionesToEdit = promociones.[idPromociones];

        
    //     res.render('promocionesToEdit', {promocionesToEdit: promocionesToEdit});
        
    //     res.render('idPromociones'); 
        
    //     res.render("promociones");
    // },
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

       //res.render("productsToEdit", {productsToEdit: productsToEdit});

        res.render("edit");
    },
    store: (req, res, next) => {
        
        let product = req.body;
        product.image = 'default.png';
        if (req.file) {
            product.image = req.file.filename;
        }
        let newId = productsModel.create(product);
        
    res.redirect('/products');

    }
    
}
