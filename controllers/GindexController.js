const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');

module.exports = {
    sales: (req, res) => {
        let sales = salesModel.all();
        res.render('sales', { sales } );
    },

    productCart:  (req, res) => {
        res.render('productCart');
    },
    // sales:  (req, res) => {
    //     let salesId = req.params.salesId; 

    //     let sales = []

    //     //let salesToEdit = sales[salesId];

        
    //     res.render('salesToEdit', {salesToEdit: salesToEdit});
        
    //     res.render('salesId'); 
        
    //     res.render("sales");
    // },
    add:  (req, res) => {

        let salesId = req.params.salesId; 

        let sales =  {
            "name": req.body.name,
            "description": req.body.description,
            "variety":req.body.variety,
            "presentation": req.body.presentation,
            "performance": req.body.performance,
            "price": req.body.price,
            "image": null
        }
        //let prueba = productsModel.readFile();
       
        res.render('/sales');
    },

    edit:  (req, res) => {

        let salesId = req.params.salesId; 

        let sales =  {
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

        res.render(idProduct);
    },
    store: (req, res, next) => {
        
        let sales = req.body;
        product.image = 'default.png';
        if (req.file) {
            sales.image = req.file.filename;
        }
        let newId = productsModel.create(product);
        
    res.redirect('/sales');

    }
    
}
