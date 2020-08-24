const path = require('path');
const jsonTable = require ('../database/jsonTable'); 
const { read } = require('fs');
const productsModel = jsonTable('products');

module.exports = {
    products : (req, res) => {
        let products = productsModel.all();
        res.render('products', { products } );
    },

    productCart:  (req, res) => {
        res.render('productCart');
    },
    
    add:  (req, res) => {
       
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

    },
    productAdmin: (req, res, nex) => {
        let products = productsModel.all();
        res.render('productsAdmin', { products } );
    },
    destroy: (req, res) => {
        //aca no se si les parece llamarlo por el Id del  producto 
        
        let id = req.params.id;
        deleteImages(id);
        productsModel.delete(id);
        res.redirect('/products');
    }
    
}
